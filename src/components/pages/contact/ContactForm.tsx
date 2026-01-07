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
  company: z.string().min(2, 'El nombre de la empresa es requerido.'),
  cif: z.string().min(9, 'El CIF/NIF debe tener 9 caracteres.').max(9, 'El CIF/NIF debe tener 9 caracteres.'),
  contactPerson: z.string().min(2, 'El nombre de contacto es requerido.'),
  email: z.string().email('Por favor, introduzca un email válido.'),
  phone: z.string().optional(),
  bondType: z.string().optional(),
  amount: z.string().optional(),
  message: z.string().min(10, 'Por favor, detalle su consulta. ¿Qué tipo de garantía necesita?'),
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
      company: '',
      cif: '',
      contactPerson: '',
      email: '',
      phone: '',
      bondType: '',
      amount: '',
      message: '',
      privacyPolicy: false,
    },
  });

  const { formState: { isSubmitting } } = form;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Solicitud Recibida",
          description: "Gracias por contactar con CONFÍA. Un asesor se pondrá en contacto con usted a la mayor brevedad.",
        });
        form.reset();
      } else {
        throw new Error(result.error || 'Ocurrió un error al enviar la solicitud.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error desconocido.';
      toast({
        title: "Error al enviar",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="shadow-lg border">
      <CardHeader>
        <CardTitle>Formulario de Estudio</CardTitle>
        <CardDescription>
          Confidencial y sin compromiso.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="company" render={({ field }) => (
                <FormItem><FormLabel>Razón Social</FormLabel><FormControl><Input placeholder="Nombre de su empresa" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="cif" render={({ field }) => (
                <FormItem><FormLabel>CIF / NIF</FormLabel><FormControl><Input placeholder="A12345678" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="contactPerson" render={({ field }) => (
                <FormItem><FormLabel>Persona de Contacto</FormLabel><FormControl><Input placeholder="Su nombre y apellidos" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
               <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="su@email.com" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormLabel>Teléfono</FormLabel><FormControl><Input type="tel" placeholder="Su teléfono de contacto" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="bondType" render={({ field }) => (
                  <FormItem><FormLabel>Tipo de Caución (Opcional)</FormLabel><FormControl><Input placeholder="Ej: Cumplimiento de contrato" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
            <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem><FormLabel>Mensaje</FormLabel><FormControl><Textarea placeholder="Describa brevemente su necesidad. Por ejemplo: 'Necesito una garantía para una licitación pública por un importe de 100.000€'." {...field} rows={5} /></FormControl><FormMessage /></FormItem>
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
                    <FormLabel className="text-sm">
                      Acepto la política de privacidad.
                    </FormLabel>
                    <FormDescription className="text-xs">
                       Confirmo que he leído y acepto la <Link href="/politica-privacidad" className="underline hover:text-primary">política de privacidad</Link>. Los datos serán tratados para gestionar su solicitud.
                    </FormDescription>
                     <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Solicitar Estudio Gratuito
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
