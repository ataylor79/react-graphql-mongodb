exports.resolvers = {
    Query: {
        getAllRecipes: async (root, args, { Recipe }) => await Recipe.find(),
    },

    Mutation: {
        addRecipe: async (
            root,
            { name, description, category, instructions, username },
            { Recipe }
        ) =>
            await new Recipe({
                name,
                description,
                category,
                instructions,
                username,
            }).save(),
    },
}
