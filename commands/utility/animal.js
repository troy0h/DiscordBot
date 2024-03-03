const Animality = require('animality');
const { EmbedBuilder, SlashCommandBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('animal')
		.setDescription('Sends a given animal')
        .addStringOption(option =>
            option.setName("input")
                .setDescription("The given animal")
                .setRequired(true)
                .addChoices(
                    { name: "dog", value: "dog" },
                    { name: "cat", value: "cat" },
                    { name: "bird", value: "bird" },
                    { name: "panda", value: "panda" },
                    { name: "red panda", value: "redpanda" },
                    { name: "koala", value: "koala" },
                    { name: "fox", value: "fox" },
                    { name: "whale", value: "whale" },
                    { name: "dolphin", value: "dolphin" },
                    { name: "kangaroo", value: "kangaroo" },
                    { name: "rabbit", value: "rabbit" },
                    { name: "lion", value: "lion" },
                    { name: "bear", value: "bear" },
                    { name: "frog", value: "frog" },
                    { name: "duck", value: "duck" },
                    { name: "penguin", value: "penguin" },
                    { name: "axolotl", value: "axolotl" },
                    { name: "capybara", value: "capybara" },
                    { name: "hedgehog", value: "hedgehog" },
                    { name: "narwhal", value: "narwhal" },
                    { name: "squirrel", value: "squirrel" },
                    { name: "fish", value: "fish" },
                    { name: "horse", value: "horse" },
                )),
	async execute(interaction) {
        const input = interaction.options.getString('input');
        animal = await Animality.getAsync(input);

        embedReply = new EmbedBuilder()
            .setColor(0x9603A1)
            .setTitle(animal.type.charAt(0).toUpperCase() + animal.type.slice(1))
            .setDescription(animal.fact)
            .setImage(animal.image),
		await interaction.reply({ embeds: [embedReply] });
	},
}
