# Rocket.Chat.App-Wikipedia

Wikipedia integration for Rocket.Chat

## Install bot

1. Clone this repository
2. Click three dot in left sidebar -> App (Marketplace) -> Private Apps -> Upload a private app -> Choose file `wiki_1.0.0.zip` in `dist` folder -> Install
3. Go to channel, type `/wiki <keywords>`

![demo](./images/demo.png)

## Development

1. Copy `wiki-bot` folder to your Rocket.Chat App folder (in root folder of Rocket.Chat)
2. Check `Rocket.Chat Apps-Engine CLI` installed

```bash
rc-apps -v
```

![check-version](./images/check-version.png)

If you don't have `Rocket.Chat Apps-Engine CLI`, install it

```bash
npm install -g @rocket.chat/apps-cli
```

**Error:** While attempting to execute the preceding command, if your operating system rejects the operation, it is likely that you do not have permission to access the file as the current user. If you suspect a permissions issue, please double-check your NPM installation, or rerun the command as root/Administrator.

**Resolution:** Prefix the command with sudo and execute as follows:

```bash
sudo npm install -g @rocket.chat/apps-cli
```

Next, install the Apps-Engine framework/library which allows applications to recognize Apps-Engine. To do this, open the terminal in Visual Studio and execute the following command:

```bash
npm install
```

You are now all set to develop your app. You can develop `wiki-bot` and run `rc-apps package` to package the app for distribution, and re-install it in Private Apps.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/namnguyenthanhwork/Rocket.Chat.App-Wikipedia/issues) if you want to contribute.

## ❤ Show your support

Please ⭐️ this repository if this project helped you!
