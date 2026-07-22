// ============================================================================
// UseProtechtion DEMO SAMPLE — this file is NOT malware.
// It only contains string patterns (fake IOCs, fake keys, fake API mentions)
// that the static analysis engine recognizes, so people without a real
// malware sample can see the full pipeline in action. Running this file
// with `node` does nothing harmful — it just prints two harmless lines.
// ============================================================================

console.log("This is a harmless UseProtechtion demo file — not real malware.");

// -- Fake indicators of compromise (all reserved/documentation ranges) --
// IP: 192.0.2.0/24 is TEST-NET-1, reserved by RFC 5737 and never routable.
const fakeC2Ip = "192.0.2.10";
// example.com/example.net are reserved for documentation by RFC 2606.
const fakeC2Url = "https://example.com/c2/checkin";
// Fake registry key — nothing on a real system reads or writes this.
const fakeRegistryKey = "HKCU\\Software\\UseProtechtionDemo\\NotReal";
// Fake dropped-file path (never created): C:\Users\Public\useprotechtion_demo_readme.txt

// -- Fake "dangerous function" mentions (never actually called maliciously) --
// Referenced only as strings so the analyzer's keyword scan flags them,
// demonstrating detection of: eval, atob, WScript.Shell, ActiveXObject,
// FromBase64String, and PowerShell-style droppers.
const demoNotes = [
  "mentions eval() the way a real dropper might",
  "mentions WScript.Shell / ActiveXObject the way a VBS dropper might",
  "mentions FromBase64String the way a PowerShell dropper might",
  "simulates behavior similar to powershell-based droppers, for demo purposes only",
];

// -- Fake "encrypted payload" — actually just base64 for a harmless string --
const fakeAesKey = "FAKEDEMOKEYNOTREALAESKEYPADDINGXYZ123456789"; // 43 chars — NOT a real key
const fakeAesIv  = "FAKEDEMOIVNOTREAL1234567";                    // 24 chars — NOT a real IV
const fakePayload =
  "VGhpcyBpcyBhIGhhcm1sZXNzIFVzZVByb3RlY2h0aW9uIGRlbW8gcGF5bG9hZC4gTm90aGluZyBoZXJlIGlzIG1hbGljaW91cyAtIGl0IG9ubHkgZXhpc3RzIHNvIHJldmlld2VycyB3aXRob3V0IGEgcmVhbCBtYWx3YXJlIHNhbXBsZSBjYW4gc2VlIHRoZSBhbmFseXNpcyBwaXBlbGluZSBpbiBhY3Rpb24u";

// The only thing this file actually does: decode + print the harmless payload.
console.log(atob(fakePayload));
