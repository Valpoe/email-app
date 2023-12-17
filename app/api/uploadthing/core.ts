import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const auth = (req: Request) => ({ id: "fakeId" }); 
 
export const ourFileRouter = {

  imageUploader: f({ image: { maxFileSize: "4MB" } })

  .onUploadComplete(async ({ metadata, file }) => {

    console.log("Upload complete");
 
      console.log("file url", file.url);
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { fileUrl: file.url };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;