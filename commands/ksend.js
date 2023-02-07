const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ksend')
		.setDescription('a happy messge!'),
	async execute(interaction) {
		await interaction.reply('wowsers');
	},
};
