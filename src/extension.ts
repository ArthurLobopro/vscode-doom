import * as vscode from "vscode";
import { OpenDooM } from "./commands/OpenDooM";

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		new OpenDooM(context).register(),
	);
}

export function deactivate() { }
