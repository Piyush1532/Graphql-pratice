const {FoodData}=require("./db.json")


const {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList}=require("graphql")
   

let foodschema=new GraphQLObjectType({
    name:"foodschema",
    fields:function(){
        return{
            id: {type:GraphQLInt},
      name: {type:GraphQLString},
      image:{type:GraphQLString} ,
      description:{type:GraphQLString},
      ingredients: {type:GraphQLString},
      type:{type:GraphQLString} ,
      recipe:{type:GraphQLString}
        }
    }
})


let Querystype= new GraphQLObjectType({
    name:"Queries",
    fields:{
        getfoods:{
        type:new GraphQLList(foodschema),
        args:{count:{type:GraphQLInt}},
        resolve:(parent,args)=>{
            console.log(args);
           let list= FoodData.slice(0,args.count)
            return list
        }
        }
    }
})
const schema=new GraphQLSchema({
    query:Querystype,
    // mutations:{}
})

module.exports = schema


// //schema will have query nd mutationns ,it will also have mutiple queryss


// const { FoodData } = require("./db.json");
// const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require("graphql");

// let FoodType = new GraphQLObjectType({
//     name: "Food",
//     fields: () => ({
//         id: { type: GraphQLInt },
//         name: { type: GraphQLString },
//         image: { type: GraphQLString },
//         description: { type: GraphQLString },
//         ingredients: { type: GraphQLString },
//         type: { type: GraphQLString },
//         recipe: { type: GraphQLString }
//     })
// });

// let QueryType = new GraphQLObjectType({
//     name: "Query",
//     fields: {
//         getFoods: {
//             type: new GraphQLList(FoodType),
//             resolve: () => {
//                 return FoodData;
//             }
//         }
//     }
// });

// const schema = new GraphQLSchema({
//     query: QueryType
// });

// module.exports = schema;
