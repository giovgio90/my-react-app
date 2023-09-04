const ImageComponent = (props) => (
  <div>
    <img src={props.imageProp} alt={props.alt} style={props.style} />
  </div>
);

export default ImageComponent;
