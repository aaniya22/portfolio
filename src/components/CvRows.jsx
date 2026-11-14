function CvRows({ rows }) {
  return rows.map((r) => (
    <div className="cv-row" key={r.org}>
      <span className="when">{r.when}</span>
      <div>
        <h4>{r.org}</h4>
        {r.role && <div className="role">{r.role}</div>}
      </div>
      {r.bullets ? (
        <div>
          {r.bullets.map((b, i) => (
            <p key={i} style={{ marginBottom: 12 }}>{b}</p>
          ))}
        </div>
      ) : (
        <p>{r.text}</p>
      )}
    </div>
  ))
}

export default CvRows