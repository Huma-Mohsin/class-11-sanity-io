import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [{
    name:"hero",
    type:"document",
    title:"Hero Schema",
    fields:[{
      name:"heading1",
      type:"string",
      title:"main heading"
    },{
      name:"heading2",
      type:"string",
      title:"sub heading"
    },{
      name:"paragraph",
      type:"string",
      title:"main paragraph"
    },
    {
      name:"btn1",
      type:"string",
      title:"button-One"
    },
    {
      name:"btn2",
      type:"string",
      title:"button-two"
    },{
      name:"Image",
      type:"image",
      title:"imgurl",
      options: {
        hotspot: true, // Allows image cropping
      },
    }]
  }],
}
