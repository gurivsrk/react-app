import  SanityClient from "@sanity/client";
import  imageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId:'pp8yvixs',
    dataset:'production',
    apiVersion:'2022-04-25',
    useCdn: true,
    token:process.env.SANITRY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source); 