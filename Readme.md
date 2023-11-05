# Description

## Enunciated

One of the most common activities in the financial world is the realization of
simulations that allow customers to know the performance of their products
through time, contemplating different scenarios and possible situations
to show up.

You want to create a program that does the simulation in the time of the account
a client's bank.
A customer has a name and an ID number which identifies the account.
An account, in turn, is made up of three products
basic financials: 

1. a savings account
2. a checking account
3. a CDT term certificate of deposit.

These products are independent and they have particular behaviors.

The total account balance is the sum of what the customer has in each
of such products. In the current account the customer can deposit or withdraw
money.
Its main feature is that it does not receive any interest on the money that
is deposited there. In the savings account, a monthly interest is paid
of 0.6% on the balance.
When the client opens a CDT, he defines the amount of money he wants to invest
and negotiates with the bank the monthly interest you'll receive. Unlike the
current account or savings account, in a CDT cannot be deposited or withdrawn
money. The only possible operation is to close it, in which case, the money and
interest goes into the checking account.

You want the program to allow a person to simulate handling their
banking products, giving you the facilities to: 

1. make the transactions necessary on the products that make up the account
2. advance month by month in time, so that the client can see the result
 of his movements and the performance of their investments.

## Interface

<p align="center">
    <img src="docs/Interface.png" alt="Interface" width="414" />
</p>