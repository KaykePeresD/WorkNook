import React, { useState } from 'react';
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from '@/components/ui/pagination';

interface Invoice {
  id: string;
  client: string;
  orderDate: string;
  status: string;
  amount: number;
}

interface PaginationComponentProps {
  invoices: Invoice[];
}

export function PaginationComponent({ invoices }: PaginationComponentProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const invoicesPerPage = 5;
  const totalInvoices = invoices.length;
  const totalPages = Math.ceil(totalInvoices / invoicesPerPage);

  const startIndex = (currentPage - 1) * invoicesPerPage;
  const displayedInvoices = invoices.slice(startIndex, startIndex + invoicesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="border p-2 dark:border-black border-zinc-700 rounded">
        <Table id="table-id">
          <TableHeader>
            <TableHead>No</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
          </TableHeader>
          <TableBody>
            {displayedInvoices.map((invoice, i) => (
              <TableRow key={invoice.id} className="border-zinc-700 hover:bg-zinc-950 dark:hover:bg-zinc-200">
                <TableCell>#{startIndex + i + 1}</TableCell>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.client}</TableCell>
                <TableCell>{invoice.orderDate}</TableCell>
                <TableCell className={invoice.status === 'Paid' ? 'text-green-500' : 'text-red-500'}>
                  {invoice.status}
                </TableCell>
                <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination className="mt-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage > 1 ? currentPage - 1 : 1);
              }}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
                className={currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}