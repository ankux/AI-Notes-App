import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function GET(req) {

    const reqUrl = req.url;
    const { searchParams } = new URL(reqUrl);
    const pdfUrl = searchParams.get('pdfUrl');
    console.log(pdfUrl)
    // const pdfUrl = "https://small-rabbit-309.convex.cloud/api/storage/e2c10585-e809-441e-9e94-7ac1f9dd0ca5";
    //1. load the pdf file
    const response = await fetch(pdfUrl);
    const data = await response.blob();
    const loader = new WebPDFLoader(data);
    const docs = await loader.load();

    
    let pdfTextContent = '';
    docs.forEach(doc => {
        pdfTextContent = pdfTextContent + doc.pageContent;
    })
    
    //2. split the text into smaller chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20,
    });
    
    const output = await splitter.createDocuments([pdfTextContent]);
   
    let splitterList = [];
    output.forEach(doc => {
        splitterList.push(doc.pageContent);
    })

    return NextResponse.json({result:splitterList});
}