import react from "react";
import{ image,StyleSheet,dimensions} from "react native";

import texto from "./texto";
import topo from "../assets/assets/topo.png"

export default function topo({titulo}){
    return<>
    <texto style={estilos.titulo}>   {titulo} </texto>

    </>
}

const estilos =  StyleSheet.create({

    topo:{
        width: "100%",
        height:578/786 * width,
    },
    titulo:{
        width:"100%",
        position: "absolute",
        textAlign:"center",
        fontsize: 16,
        color: 'white',
        fontWeight: "bold",
        padding: 16,
}
});