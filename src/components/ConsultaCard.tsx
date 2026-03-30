import { StyleSheet, Text, View } from "react-native";
import { Consulta } from "../interfaces/consulta"

type ConsultaCardProps = {
    consulta: Consulta;
    onConfirmar?: () => void;
    onCancelar?: () => void;
}

export default function ConsultaCard({
    consulta,
    onConfirmar,
    onCancelar,
} : ConsultaCardProps){

    function formatarValor(valor: number) : string {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    function formatarData(data: Date) : string{
        return data.toLocaleDateString("pt-BR")
    }
    
    return (
        <View style={styles.card}>
            <Text>{consulta.paciente.nome}</Text>
            <Text>{formatarData(consulta.data)}</Text>
            <Text>{formatarValor(consulta.valor)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 16,
    }
});