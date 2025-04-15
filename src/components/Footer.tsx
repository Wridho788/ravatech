export default function Footer() {
    return (
      <footer className="mt-16 border-t border-softgray/30 pt-6 pb-10 text-center text-sm text-softgray">
        <p className="mb-2">
          © {new Date().getFullYear()} <span className="text-cyan font-semibold">Ravatech</span>. All rights reserved.
        </p>
        <p>
          Made with 💙 in Indonesia.
        </p>
      </footer>
    )
  }
  