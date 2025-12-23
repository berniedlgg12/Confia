'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, Loader2 } from 'lucide-react';
import { generatePersonalizedIntro } from '@/ai/flows/generate-personalized-testimonial-intros';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  clientName: z.string().min(2, 'El nombre es demasiado corto'),
  clientTitle: z.string().min(2, 'El cargo es demasiado corto'),
  companyName: z.string().min(2, 'El nombre de la empresa es demasiado corto'),
  productOrService: z.string().min(2, 'El producto o servicio es demasiado corto'),
  testimonialText: z.string().min(20, 'El testimonio es demasiado corto'),
});

type FormData = z.infer<typeof formSchema>;

const TestimonialGenerator = () => {
  const [generatedIntro, setGeneratedIntro] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientName: '',
      clientTitle: '',
      companyName: '',
      productOrService: 'Seguro de Caución',
      testimonialText: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedIntro('');
    try {
      const result = await generatePersonalizedIntro(data);
      setGeneratedIntro(result.introduction);
    } catch (error) {
      console.error('Error generating intro:', error);
      toast({
        title: 'Error',
        description: 'No se pudo generar la introducción. Por favor, inténtelo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="h-6 w-6 text-accent" />
          Herramienta IA de Contenido
        </CardTitle>
        <CardDescription>
          Genere una introducción personalizada y de impacto para un testimonio de cliente utilizando IA.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="clientName" render={({ field }) => (
                    <FormItem><FormLabel>Nombre Cliente</FormLabel><FormControl><Input placeholder="Ej: Javier García" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="clientTitle" render={({ field }) => (
                    <FormItem><FormLabel>Cargo Cliente</FormLabel><FormControl><Input placeholder="Ej: Director" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
            <FormField control={form.control} name="companyName" render={({ field }) => (
                <FormItem><FormLabel>Empresa</FormLabel><FormControl><Input placeholder="Ej: G-Construct" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="testimonialText" render={({ field }) => (
                <FormItem><FormLabel>Texto del Testimonio</FormLabel><FormControl><Textarea placeholder="Pegue aquí el testimonio completo..." {...field} rows={4} /></FormControl><FormMessage /></FormItem>
            )} />
             <FormField control={form.control} name="productOrService" render={({ field }) => (
                <FormItem><FormLabel>Producto/Servicio</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            {generatedIntro && (
              <div className="bg-accent/10 p-4 rounded-md border border-accent/20">
                <h4 className="font-semibold text-primary mb-2">Introducción Generada:</h4>
                <p className="text-sm text-primary italic">&ldquo;{generatedIntro}&rdquo;</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              Generar Introducción
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default TestimonialGenerator;
