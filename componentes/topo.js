import react from "react";
import{ image,StyleSheet,dimensions} from "react native";

import texto from "./texto";

export defult function topo({titulo}){
    return<>
    <texto style={estilos.titulo}>   {titulo} </texto>

    </>
}

const estilos = style StyleSheet.create({

    topo:{
        width: "100%"
    }