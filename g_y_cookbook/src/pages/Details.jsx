export function Details() {
    return (
      <div>
        <h2>Video Details</h2>
        <p>Watch this amazing video below:</p>
  
        {/* Embed YouTube Video */}
        <section>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=QB7ACr7pUuE"  
            title="Video Title"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    );
  }
  