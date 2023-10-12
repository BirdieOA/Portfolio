// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Maite <maitedeleonf@gmail.com>',
      to: ['hexagonopaginasweb@gmail.com'],
      subject: 'WORKS',
      react: (<><p>Cuerpo del email</p></>)
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
