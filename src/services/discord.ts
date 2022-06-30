const WEBHOOK = 'https://discord.com/api/webhooks/991761458515955883/2lKwJYVngWKn5q6w3t-cM413sIK-CsQqzkKnnyLpn4PcFfqro_vEntEGgOoO-L3MwRav';

export const sendMessage = async (message: string) => {
	const body = {
		content: message,
	};
	await fetch(WEBHOOK, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
};
