// Cursor dot-field + scroll slide-in reveal (self-contained)
const reduce = false
const canHover = true

const style = document.createElement('style')
style.textContent = `
.reveal{opacity:0;transform:translateY(56px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
.reveal.in{opacity:1;transform:translateY(0)}
`
document.head.appendChild(style)

// ---- scroll reveal ----
if (!reduce) {
  const SEL = '.eyebrow, .page-title, .rule, .row, .cv-row, .sk, .dl'
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )
  const scan = () => document.querySelectorAll(SEL).forEach((el) => {
    if (!el.dataset.rv) { el.dataset.rv = '1'; el.classList.add('reveal'); io.observe(el) }
  })
  scan()
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true })
}

