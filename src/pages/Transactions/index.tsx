import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SeacherForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransationsContainer, TransationsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return(
        <div>
            <Header/>
            <Summary/>

            <TransationsContainer>
                <SearchForm/>

                <TransationsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return(
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                            )
                        })}
                        
                    </tbody>
                </TransationsTable>
            </TransationsContainer>
        </div>
    )
}