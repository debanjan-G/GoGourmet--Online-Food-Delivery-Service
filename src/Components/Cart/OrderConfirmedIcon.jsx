// Create an object with the desired props, including xmlns attributes
const OrderConfirmedIcon = () => {
  // Define namespaces as a single string
  const xmlns = `
              xmlns="http://www.w3.org/2000/svg"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:cc="http://web.resource.org/cc/"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:ns1="http://sozi.baierouge.fr"
            `;

  return (
    <svg
      {...{
        xmlns,
        id: "Layer_1",
        version: "1.1",
        xmlSpace: "preserve",
        viewBox: "0 0 42 42",
        enableBackground: "new 0 0 42 42",
        y: "0px",
        x: "0px",
      }}
    >
      {/* SVG content */}
      {/* ... */}
    </svg>
  );
};

export default OrderConfirmedIcon;
