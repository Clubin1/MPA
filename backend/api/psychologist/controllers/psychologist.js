/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {


    create: async (ctx) => {

        const {
            name,
            lastName,
            company,
            address,
            city,
            state,
            zip,
            phone,
            otherPhone,
            fax,
            email,
            website,
            specialties,
            treatmentOrientation,
            insuranceAccepted,
            treatmentModality,
            assessmentEvaluations,
            populationsServed,
            languages
        } = ctx.request.body

        // Register the order in the database
        const psychologist = await strapi.services.psychologist.create({

            name,
            lastName,
            company,
            address,
            city,
            state,
            zip,
            phone,
            otherPhone,
            fax,
            email,
            website,
            specialties,
            treatmentOrientation,
            insuranceAccepted,
            treatmentModality,
            assessmentEvaluations,
            populationsServed,
            languages
        });

        return psychologist;
    }
};
