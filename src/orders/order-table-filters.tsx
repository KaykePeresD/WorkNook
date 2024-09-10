import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface OrderTableFiltersProps {
  onFilter: (filters: { clientName: string; paymentStatus: string }) => void;
}

export function OrderTableFilters({ onFilter }: OrderTableFiltersProps) {
  const [clientName, setClientName] = useState<string>('');
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleFilter = () => {
    onFilter({ clientName, paymentStatus });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Filter Orders</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter Orders</DialogTitle>
            <DialogDescription>Filter by client name, date, or payment status.</DialogDescription>
          </DialogHeader>
          
          {/* Client Name Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Client Name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="input input-bordered w-full p-2"
            />
          </div>

          {/* Calendar for Date Selection */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>

          {/* Payment Status Dropdown */}
          <div className="my-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                  {paymentStatus || 'Select Payment Status'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setPaymentStatus('Paid')} className="text-green-500 font-semibold">
                  Paid
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setPaymentStatus('Not Paid')} className="text-red-500 font-semibold">
                  Not Paid
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Filter Button */}
          <Button type="button" onClick={handleFilter} variant="outline" className="font-bold">
            Apply Filters
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
