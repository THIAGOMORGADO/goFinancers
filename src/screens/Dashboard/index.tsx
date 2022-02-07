import React from "react";


import { HighlightCards } from "../../components/HighlightCards";
import { TransactionCrads, TransactionCardProps } from "../../components/TransactionCrads";

import {
  Container,
  Header,
  Userwarpper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UseName,
  Icon,
  HighlightCard,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}


export function DashBoard() {
  const data: DataListProps[] = [
    { 
      id: '1',
      type: 'positive',
      title: "Desemvolvimento de site",
      amount: "R$12,000,00",
      category: {
        name: "aluguel",
        icon: "dollar-sign",
      },
      date: "05/02/2021",
    },
    {
      id: '2',
      type: 'negative',
      title: "PIZZA",
      amount: "R$12,000,00",
      category: {
        name: "Pizza",
        icon: "coffee",
      },
      date: "05/02/2021",
    },
    {
      id: '3',
      type: 'positive',
      title: "Aluguel",
      amount: "R$12,000,00",
      category: {
        name: "casa",
        icon: "home",
      },
      date: "05/02/2021",
    },
  ];
  return (
    <Container>
      <Header>
        <Userwarpper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/27393649?v=4",
              }}
            />

            <User>
              <UserGreeting>Ola,</UserGreeting>
              <UseName>Thiago morgado</UseName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </Userwarpper>
      </Header>

      <HighlightCard>
        <HighlightCards
          type="up"
          title="Entradas"
          amount="R$ 14,000.00"
          lastTransaction="Ultima entrada dia 03 de feveiro"
        />
        <HighlightCards
          type="down"
          title="Saida"
          amount="R$ 14,000.00"
          lastTransaction="Ultima entrada dia 03 de feveiro"
        />
        <HighlightCards
          type="total"
          title="total"
          amount="R$ 14,000.00"
          lastTransaction="Ultima entrada dia 03 de feveiro"
        />
      </HighlightCard>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtrator={item => item.id}
          renderItem={({ item }) => <TransactionCrads data={item} />}
        />
      </Transactions>
    </Container>
  );
}
