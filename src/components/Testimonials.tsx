
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarImage } from './ui/avatar';
import { BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Ingrid Jones",
    image: "https://avatar.vercel.sh/james",
    comment: "WorkNook made our home office flow! 👍"
  },
  {
    name: "Lucas Miller",
    image: "https://avatar.vercel.sh/jill",
    comment: "Remote work made easy by WorkNook. 🚀"
  },
  {
    name: "Zoe Smith",
    image: "https://avatar.vercel.sh/jack",
    comment: "Loving the tools! Thank You Work Nook 👏"
  }
];

export function TestimonialCard({ testimonial }) {
  return (
    <Card className="w-[400px] h-[180px] p-3 bg-zinc-100 border rounded-lg shadow-lg">
      <CardHeader className="flex items-start">
        <p className="text-zinc-700">"{testimonial.comment}"</p>
      </CardHeader>
      <CardContent className='flex justify-start gap-3 items-center'>
        <Avatar>
          <AvatarImage src={testimonial.image} className="h-10 w-10 rounded-full" />
        </Avatar>
        <CardTitle className="text-lg text-black font-semibold whitespace-nowrap">{testimonial.name}</CardTitle>
        <BadgeCheck className='h-5 w-5 text-white bg-blue-500 rounded-full'/>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-between">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
}