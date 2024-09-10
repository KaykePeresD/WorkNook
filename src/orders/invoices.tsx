import React, { useState } from 'react';
import { OrderTableFilters } from './order-table-filters';
import { PaginationComponent } from './paginationComponent';


interface Invoice {
  id: string;
  client: string;
  orderDate: string;
  status: string;
  amount: number;
}

const invoices: Invoice[] = [
  { id: '1', client: 'Ana', orderDate: 'August 8, 2024', status: 'Not Paid', amount: 100.00 },
  { id: '2', client: 'Clarice', orderDate: 'January 19, 2024', status: 'Paid', amount: 200.00 },
  { id: '3', client: 'John', orderDate: 'July 8, 2024', status: 'Paid', amount: 300.00 },
  { id: '4', client: 'Leonardo', orderDate: 'August 10, 2024', status: 'Not Paid', amount: 400.00 },
  { id: '5', client: 'Théo', orderDate: 'September 15, 2024', status: 'Paid', amount: 500.00 },
  { id: '6', client: 'Fabiana', orderDate: 'March 12, 2024', status: 'Paid', amount: 600.00 },
  { id: '7', client: 'Rafaela', orderDate: 'August 28, 2024', status: 'Paid', amount: 700.00 },
  { id: '8', client: 'Heitor', orderDate: 'July 11, 2024', status: 'Paid', amount: 800.00 },
  { id: '9', client: 'Igor', orderDate: 'August 1, 2024', status: 'Not Paid', amount: 900.00 },
  { id: '10', client: 'Cristina', orderDate: 'October 29, 2024', status: 'Paid', amount: 1000.00 },
  { id: '11', client: 'Donizete', orderDate: 'November 16, 2024', status: 'Paid Paid', amount: 100.00 },
  { id: '12', client: 'Juliana', orderDate: 'August 9, 2024', status: 'Not Paid', amount: 200.00 },
  { id: '13', client: 'Ana Clara', orderDate: 'August 14, 2024', status: 'Not Paid', amount: 240.00 },
  { id: '14', client: 'Emmanuele', orderDate: 'August 17, 2024', status: 'Paid', amount: 400.00 },
  { id: '15', client: 'Sergio', orderDate: 'October 18, 2024', status: 'Paid', amount: 125.00 },
];

export function MainComponent() {
  const [filteredData, setFilteredData] = useState<Invoice[]>(invoices);
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [paymentStatus, setPaymentStatus] = useState<string>('all'); 

  const handleFilter = () => {
    let filtered = invoices;

    // Filtragem por ID ou Nome
    if (searchTerm) {
      filtered = filtered.filter(invoice =>
        invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.id.includes(searchTerm)
      );
    }

    // Filtragem por Status de Pagamento
    if (paymentStatus !== 'all') {
      filtered = filtered.filter(invoice =>
        paymentStatus === 'paid' ? invoice.status === 'Paid' : invoice.status === 'Not Paid'
      );
    }

    setFilteredData(filtered);
  };

  const handleReset = () => {
    setSearchTerm('');
    setPaymentStatus('all');
    setFilteredData(invoices); // Resetando para a lista completa
  };

  return (
    <div>
      <OrderTableFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
        onFilter={handleFilter}
        onReset={handleReset} 
      />
      <PaginationComponent invoices={filteredData} />
    </div>
  );
};

