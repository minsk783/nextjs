import S3 from 'aws-sdk/clients/s3'

const s3 = new S3({
    region: 'ap-southeast-1',
    accessKeyId: 'AKIA33V6YOONVSU5ADN7',
    secretAccessKey: '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',
    signatureVersion: 'v4'
})

export default async (req, res) => {
    const { type, name } = JSON.parse(req.body)
    const fileParams = {
        Bucket: "hello-aws-s3",
        Key: name,
        Expires: 600,
        ContentType: type,
    };

    console.log(fileParams)
    const url = await s3.getSignedUrlPromise("putObject", fileParams);

    res.statusCode = 200;
    res.json({ url });
}