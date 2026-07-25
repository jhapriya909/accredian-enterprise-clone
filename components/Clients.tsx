const clients = ["Technology", "Financial Services", "Healthcare", "Retail", "Consulting", "Manufacturing"];

export default function Clients() {
  const repeated = [...clients, ...clients];
  return (
    <section className="clients" aria-label="Industries served">
      <div className="shell"><p>Built for ambitious teams across industries</p></div>
      <div className="client-marquee">
        <div className="client-track">
          {repeated.map((client, index) => <span key={`${client}-${index}`}><i />{client}</span>)}
        </div>
      </div>
    </section>
  );
}
