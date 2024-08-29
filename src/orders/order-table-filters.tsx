import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import { Search, X } from "lucide-react";


export function OrderTableFilters() {
 const {} = useForm({
    
 })

    return(
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filters:</span>
            <Input placeholder="Client ID" className="h-8 w-auto text-black dark:bg-zinc-100"/>
            <Input placeholder="Client Name" className="h-8 w-[320px] text-black dark:bg-zinc-100"/>
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px] bg-zinc-100 text-black">
                 <SelectValue />
                    <SelectContent >
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="paid" className="text-green-500">Paid</SelectItem>
                        <SelectItem value="canceled" className="text-red-500">Not Paid</SelectItem>
                    </SelectContent>
                </SelectTrigger>
            </Select>


            <Button className="p-1" type='submit' variant='secondary' size='xs'>
                <Search className="h-4 w-4 mr-2"/>
                Filter Results
            </Button>

            <Button className="p-1" type='button' variant='destructive' size='xs'>
                <X className="h-4 w-4 mr-2"/>
                Remove Filter
            </Button>
        </form>
    )
}

function useForm(arg0: {}) {
    throw new Error("Function not implemented.");
}
