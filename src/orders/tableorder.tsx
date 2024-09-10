import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function MyTable({ data })  {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.length > 0 ? (
                    data.map(client => (
                        <TableRow key={client.id}>
                            <TableCell>{client.id}</TableCell>
                            <TableCell>{client.name}</TableCell>
                            <TableCell>{client.isPaid ? 'Paid' : 'Not Paid'}</TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center">
                            No data found
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};