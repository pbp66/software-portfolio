import userDefs from "./userDefs.js";
import inquiryDefs from "./inquiryDefs.js";

const typeDefs = userDefs;

export { typeDefs };

/**
 * TODO: create schema definition for github repos, featured, portfolio, vault, resume
 * TODO: create models for github repos, featured, portfolio, vault, resume
 * TODO: create sub-models (sub-documents?) to assist with the above models
 * TODO: modularize the type-defs: Option 1: https://medium.com/@choudlet/how-to-combine-graphql-type-definitions-quickly-and-easily-with-apollo-server-c96c4d9a7ea1, Option 2: https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/, Option 3: extract typeDefs from each literal, then re-combine them into one long literal..., Option 4: Combine all typeDefs into one literal. Will there be an issue with repeating query and mutation types? My goto is a mix of option 2 and 3...
 *
 */
