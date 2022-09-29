interface PhotoProps  {
    id: number
    albumId: number
    title: string
    url: string
    thumbnailUrl: string
}
const PhotoCard = ({photo}:{photo:PhotoProps}) => {
    return (
        <div>
            <h2>{photo.title}</h2>
            <a href={photo.url}>{photo.title}</a>
            <img src={photo.thumbnailUrl} alt=""/>
        </div>
    );
};

export default PhotoCard;