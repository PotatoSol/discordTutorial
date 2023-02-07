const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('msend')
		.setDescription('Send points to someone else'),
	async execute(interaction) {
		await interaction.reply('Pong!');
    
	},
};
