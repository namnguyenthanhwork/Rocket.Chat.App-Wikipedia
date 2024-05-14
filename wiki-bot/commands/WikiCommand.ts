import { IHttp, IModify, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { ISlashCommand, SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
const appConfig = require('./app.json');

export class WikiCommand implements ISlashCommand {
	public command = 'wiki';
	public i18nParamsExample = 'WikiGPT_Search_Term';
	public i18nDescription = 'WikiGPT_Command_Description';
	public providesPreview = false;

	public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp): Promise<void> {
		const args = context.getArguments();

		// Join all arguments into a single string
		const pageName = args.join(' ');

		if (!pageName) {
			throw new Error('Page name is required!');
		}

		const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${encodeURIComponent(
			pageName,
		)}`;

		const response = await http.get(url);

		if (response.statusCode !== 200) {
			throw new Error('Failed to retrieve wiki page!');
		}

		const data = JSON.parse(response.content || '{}');
		const pages = data.query.pages;
		const pageId = Object.keys(pages)[0];
		let pageContent: string;

		// Check if the page exists
		if (pageId === '-1') {
			pageContent = `❌ No results found for '${pageName}'`;
		} else {
			pageContent = pages[pageId].extract;
		}

		// Send the page content to the chat by bot user
		const botUser = await read.getUserReader().getByUsername(`${appConfig.nameSlug}.bot`);
		const builder = modify.getCreator().startMessage().setSender(botUser).setRoom(context.getRoom()).setText(pageContent);

		await modify.getCreator().finish(builder);
	}
}
