'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido.'),
  company: z.string().min(2, 'El nombre de la empresa es requerido.'),
  email: z.string().email('Por favor, introduzca un email válido.'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Por favor, detalle su consulta.'),
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: "Debe aceptar la política de privacidad."
  })
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      privacyPolicy: false,
    },
  });

  const { formState: { isSubmitting } } = form;

  // Dummy submission handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactar con nosotros. Nos pondremos en contacto con usted a la mayor brevedad.",
    });
    form.reset();
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Formulario de Consulta</CardTitle>
        <CardDescription>
          Un asesor se pondrá en contacto con usted para analizar su caso.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem><FormLabel>Nombre Completo</FormLabel><FormControl><Input placeholder="Su nombre" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="company" render={({ field }) => (
                <FormItem><FormLabel>Empresa</FormLabel><FormControl><Input placeholder="Nombre de su empresa" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="su@email.com" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel>Teléfono (Opcional)</FormLabel><FormControl><Input type="tel" placeholder="Su teléfono" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
            <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem><FormLabel>Su Mensaje</FormLabel><FormControl><Textarea placeholder="Describa brevemente su necesidad o consulta..." {...field} rows={5} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField
              control={form.control}
              name="privacyPolicy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md pt-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      He leído y acepto la política de privacidad.
                    </FormLabel>
                    <FormDescription>
                       Puede consultar nuestra <Link href="#" className="underline hover:text-primary">política de privacidad</Link>.
                    </FormDescription>
                     <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Enviar Consulta
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
