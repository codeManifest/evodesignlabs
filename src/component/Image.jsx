export default function Image(props){

    let {photo}=props;

    return(
        <img className="h-2/3 " src={photo} alt="" />
    )
}