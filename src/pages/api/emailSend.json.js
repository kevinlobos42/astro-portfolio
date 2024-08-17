import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, subject, text } = body;
  if (!to || !from || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "All fields not filled out",
    });
  }
  const send = await resend.emails.send({
    to,
    from,
    subject,
    text,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else if (send.error) {

    return new Response(
        JSON.stringify({
          message: send.error,
        }),
        {
          status: 500,
          statusText: "Internal Server Error"
        }
      );
  }
};
