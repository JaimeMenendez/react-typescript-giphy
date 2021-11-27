export default interface IGifData {
    id: string,
    title: string,
    images: {
        fixed_height: {
            url: string
        },
        original: {
            url: string
        },
        downsized:{
            url: string
        }
    }
}
