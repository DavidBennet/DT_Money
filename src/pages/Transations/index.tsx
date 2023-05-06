import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SeacherForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransationsContainer, TransationsTable } from "./styles";


export function Transations() {
    return(
        <div>
            <Header/>
            <Summary/>

            <TransationsContainer>
                <SearchForm/>

                <TransationsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de Site</td>
                            <td>
                                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>01/05/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Aluguel do Apartamento</td>
                            <td>
                                <PriceHighlight variant="outcome">- R$ 1.200,00</PriceHighlight>
                            </td>
                            <td>Casa</td>
                            <td>02/05/2023</td>
                        </tr>
                    </tbody>
                </TransationsTable>
            </TransationsContainer>
        </div>
    )
}