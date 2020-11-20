/**
 * `Char` represents a single-byte character.
 */
export type Char =
  | "\x00" | "\x01" | "\x02" | "\x03" | "\x04" | "\x05" | "\x06" | "\x07"
  | "\x08" | "\x09" | "\x0A" | "\x0B" | "\x0C" | "\x0D" | "\x0E" | "\x0F"
  | "\x10" | "\x11" | "\x12" | "\x13" | "\x14" | "\x15" | "\x16" | "\x17"
  | "\x18" | "\x19" | "\x1A" | "\x1B" | "\x1C" | "\x1D" | "\x1E" | "\x1F"
  | "\x20" | "\x21" | "\x22" | "\x23" | "\x24" | "\x25" | "\x26" | "\x27"
  | "\x28" | "\x29" | "\x2A" | "\x2B" | "\x2C" | "\x2D" | "\x2E" | "\x2F"
  | "\x30" | "\x31" | "\x32" | "\x33" | "\x34" | "\x35" | "\x36" | "\x37"
  | "\x38" | "\x39" | "\x3A" | "\x3B" | "\x3C" | "\x3D" | "\x3E" | "\x3F"
  | "\x40" | "\x41" | "\x42" | "\x43" | "\x44" | "\x45" | "\x46" | "\x47"
  | "\x48" | "\x49" | "\x4A" | "\x4B" | "\x4C" | "\x4D" | "\x4E" | "\x4F"
  | "\x50" | "\x51" | "\x52" | "\x53" | "\x54" | "\x55" | "\x56" | "\x57"
  | "\x58" | "\x59" | "\x5A" | "\x5B" | "\x5C" | "\x5D" | "\x5E" | "\x5F"
  | "\x60" | "\x61" | "\x62" | "\x63" | "\x64" | "\x65" | "\x66" | "\x67"
  | "\x68" | "\x69" | "\x6A" | "\x6B" | "\x6C" | "\x6D" | "\x6E" | "\x6F"
  | "\x70" | "\x71" | "\x72" | "\x73" | "\x74" | "\x75" | "\x76" | "\x77"
  | "\x78" | "\x79" | "\x7A" | "\x7B" | "\x7C" | "\x7D" | "\x7E" | "\x7F"
  | "\x80" | "\x81" | "\x82" | "\x83" | "\x84" | "\x85" | "\x86" | "\x87"
  | "\x88" | "\x89" | "\x8A" | "\x8B" | "\x8C" | "\x8D" | "\x8E" | "\x8F"
  | "\x90" | "\x91" | "\x92" | "\x93" | "\x94" | "\x95" | "\x96" | "\x97"
  | "\x98" | "\x99" | "\x9A" | "\x9B" | "\x9C" | "\x9D" | "\x9E" | "\x9F"
  | "\xA0" | "\xA1" | "\xA2" | "\xA3" | "\xA4" | "\xA5" | "\xA6" | "\xA7"
  | "\xA8" | "\xA9" | "\xAA" | "\xAB" | "\xAC" | "\xAD" | "\xAE" | "\xAF"
  | "\xB0" | "\xB1" | "\xB2" | "\xB3" | "\xB4" | "\xB5" | "\xB6" | "\xB7"
  | "\xB8" | "\xB9" | "\xBA" | "\xBB" | "\xBC" | "\xBD" | "\xBE" | "\xBF"
  | "\xC0" | "\xC1" | "\xC2" | "\xC3" | "\xC4" | "\xC5" | "\xC6" | "\xC7"
  | "\xC8" | "\xC9" | "\xCA" | "\xCB" | "\xCC" | "\xCD" | "\xCE" | "\xCF"
  | "\xD0" | "\xD1" | "\xD2" | "\xD3" | "\xD4" | "\xD5" | "\xD6" | "\xD7"
  | "\xD8" | "\xD9" | "\xDA" | "\xDB" | "\xDC" | "\xDD" | "\xDE" | "\xDF"
  | "\xE0" | "\xE1" | "\xE2" | "\xE3" | "\xE4" | "\xE5" | "\xE6" | "\xE7"
  | "\xE8" | "\xE9" | "\xEA" | "\xEB" | "\xEC" | "\xED" | "\xEE" | "\xEF"
  | "\xF0" | "\xF1" | "\xF2" | "\xF3" | "\xF4" | "\xF5" | "\xF6" | "\xF7"
  | "\xF8" | "\xF9" | "\xFA" | "\xFB" | "\xFC" | "\xFD" | "\xFE" | "\xFF";

type Incrs = {
  "\x00": "\x01", "\x01": "\x02", "\x02": "\x03", "\x03": "\x04",
  "\x04": "\x05", "\x05": "\x06", "\x06": "\x07", "\x07": "\x08",
  "\x08": "\x09", "\x09": "\x0A", "\x0A": "\x0B", "\x0B": "\x0C",
  "\x0C": "\x0D", "\x0D": "\x0E", "\x0E": "\x0F", "\x0F": "\x10",
  "\x10": "\x11", "\x11": "\x12", "\x12": "\x13", "\x13": "\x14",
  "\x14": "\x15", "\x15": "\x16", "\x16": "\x17", "\x17": "\x18",
  "\x18": "\x19", "\x19": "\x1A", "\x1A": "\x1B", "\x1B": "\x1C",
  "\x1C": "\x1D", "\x1D": "\x1E", "\x1E": "\x1F", "\x1F": "\x20",
  "\x20": "\x21", "\x21": "\x22", "\x22": "\x23", "\x23": "\x24",
  "\x24": "\x25", "\x25": "\x26", "\x26": "\x27", "\x27": "\x28",
  "\x28": "\x29", "\x29": "\x2A", "\x2A": "\x2B", "\x2B": "\x2C",
  "\x2C": "\x2D", "\x2D": "\x2E", "\x2E": "\x2F", "\x2F": "\x30",
  "\x30": "\x31", "\x31": "\x32", "\x32": "\x33", "\x33": "\x34",
  "\x34": "\x35", "\x35": "\x36", "\x36": "\x37", "\x37": "\x38",
  "\x38": "\x39", "\x39": "\x3A", "\x3A": "\x3B", "\x3B": "\x3C",
  "\x3C": "\x3D", "\x3D": "\x3E", "\x3E": "\x3F", "\x3F": "\x40",
  "\x40": "\x41", "\x41": "\x42", "\x42": "\x43", "\x43": "\x44",
  "\x44": "\x45", "\x45": "\x46", "\x46": "\x47", "\x47": "\x48",
  "\x48": "\x49", "\x49": "\x4A", "\x4A": "\x4B", "\x4B": "\x4C",
  "\x4C": "\x4D", "\x4D": "\x4E", "\x4E": "\x4F", "\x4F": "\x50",
  "\x50": "\x51", "\x51": "\x52", "\x52": "\x53", "\x53": "\x54",
  "\x54": "\x55", "\x55": "\x56", "\x56": "\x57", "\x57": "\x58",
  "\x58": "\x59", "\x59": "\x5A", "\x5A": "\x5B", "\x5B": "\x5C",
  "\x5C": "\x5D", "\x5D": "\x5E", "\x5E": "\x5F", "\x5F": "\x60",
  "\x60": "\x61", "\x61": "\x62", "\x62": "\x63", "\x63": "\x64",
  "\x64": "\x65", "\x65": "\x66", "\x66": "\x67", "\x67": "\x68",
  "\x68": "\x69", "\x69": "\x6A", "\x6A": "\x6B", "\x6B": "\x6C",
  "\x6C": "\x6D", "\x6D": "\x6E", "\x6E": "\x6F", "\x6F": "\x70",
  "\x70": "\x71", "\x71": "\x72", "\x72": "\x73", "\x73": "\x74",
  "\x74": "\x75", "\x75": "\x76", "\x76": "\x77", "\x77": "\x78",
  "\x78": "\x79", "\x79": "\x7A", "\x7A": "\x7B", "\x7B": "\x7C",
  "\x7C": "\x7D", "\x7D": "\x7E", "\x7E": "\x7F", "\x7F": "\x80",
  "\x80": "\x81", "\x81": "\x82", "\x82": "\x83", "\x83": "\x84",
  "\x84": "\x85", "\x85": "\x86", "\x86": "\x87", "\x87": "\x88",
  "\x88": "\x89", "\x89": "\x8A", "\x8A": "\x8B", "\x8B": "\x8C",
  "\x8C": "\x8D", "\x8D": "\x8E", "\x8E": "\x8F", "\x8F": "\x90",
  "\x90": "\x91", "\x91": "\x92", "\x92": "\x93", "\x93": "\x94",
  "\x94": "\x95", "\x95": "\x96", "\x96": "\x97", "\x97": "\x98",
  "\x98": "\x99", "\x99": "\x9A", "\x9A": "\x9B", "\x9B": "\x9C",
  "\x9C": "\x9D", "\x9D": "\x9E", "\x9E": "\x9F", "\x9F": "\xA0",
  "\xA0": "\xA1", "\xA1": "\xA2", "\xA2": "\xA3", "\xA3": "\xA4",
  "\xA4": "\xA5", "\xA5": "\xA6", "\xA6": "\xA7", "\xA7": "\xA8",
  "\xA8": "\xA9", "\xA9": "\xAA", "\xAA": "\xAB", "\xAB": "\xAC",
  "\xAC": "\xAD", "\xAD": "\xAE", "\xAE": "\xAF", "\xAF": "\xB0",
  "\xB0": "\xB1", "\xB1": "\xB2", "\xB2": "\xB3", "\xB3": "\xB4",
  "\xB4": "\xB5", "\xB5": "\xB6", "\xB6": "\xB7", "\xB7": "\xB8",
  "\xB8": "\xB9", "\xB9": "\xBA", "\xBA": "\xBB", "\xBB": "\xBC",
  "\xBC": "\xBD", "\xBD": "\xBE", "\xBE": "\xBF", "\xBF": "\xC0",
  "\xC0": "\xC1", "\xC1": "\xC2", "\xC2": "\xC3", "\xC3": "\xC4",
  "\xC4": "\xC5", "\xC5": "\xC6", "\xC6": "\xC7", "\xC7": "\xC8",
  "\xC8": "\xC9", "\xC9": "\xCA", "\xCA": "\xCB", "\xCB": "\xCC",
  "\xCC": "\xCD", "\xCD": "\xCE", "\xCE": "\xCF", "\xCF": "\xD0",
  "\xD0": "\xD1", "\xD1": "\xD2", "\xD2": "\xD3", "\xD3": "\xD4",
  "\xD4": "\xD5", "\xD5": "\xD6", "\xD6": "\xD7", "\xD7": "\xD8",
  "\xD8": "\xD9", "\xD9": "\xDA", "\xDA": "\xDB", "\xDB": "\xDC",
  "\xDC": "\xDD", "\xDD": "\xDE", "\xDE": "\xDF", "\xDF": "\xE0",
  "\xE0": "\xE1", "\xE1": "\xE2", "\xE2": "\xE3", "\xE3": "\xE4",
  "\xE4": "\xE5", "\xE5": "\xE6", "\xE6": "\xE7", "\xE7": "\xE8",
  "\xE8": "\xE9", "\xE9": "\xEA", "\xEA": "\xEB", "\xEB": "\xEC",
  "\xEC": "\xED", "\xED": "\xEE", "\xEE": "\xEF", "\xEF": "\xF0",
  "\xF0": "\xF1", "\xF1": "\xF2", "\xF2": "\xF3", "\xF3": "\xF4",
  "\xF4": "\xF5", "\xF5": "\xF6", "\xF6": "\xF7", "\xF7": "\xF8",
  "\xF8": "\xF9", "\xF9": "\xFA", "\xFA": "\xFB", "\xFB": "\xFC",
  "\xFC": "\xFD", "\xFD": "\xFE", "\xFE": "\xFF", "\xFF": "\x00",
};

type Decrs = {
  "\x00": "\xFF", "\x01": "\x00", "\x02": "\x01", "\x03": "\x02",
  "\x04": "\x03", "\x05": "\x04", "\x06": "\x05", "\x07": "\x06",
  "\x08": "\x07", "\x09": "\x08", "\x0A": "\x09", "\x0B": "\x0A",
  "\x0C": "\x0B", "\x0D": "\x0C", "\x0E": "\x0D", "\x0F": "\x0E",
  "\x10": "\x0F", "\x11": "\x10", "\x12": "\x11", "\x13": "\x12",
  "\x14": "\x13", "\x15": "\x14", "\x16": "\x15", "\x17": "\x16",
  "\x18": "\x17", "\x19": "\x18", "\x1A": "\x19", "\x1B": "\x1A",
  "\x1C": "\x1B", "\x1D": "\x1C", "\x1E": "\x1D", "\x1F": "\x1E",
  "\x20": "\x1F", "\x21": "\x20", "\x22": "\x21", "\x23": "\x22",
  "\x24": "\x23", "\x25": "\x24", "\x26": "\x25", "\x27": "\x26",
  "\x28": "\x27", "\x29": "\x28", "\x2A": "\x29", "\x2B": "\x2A",
  "\x2C": "\x2B", "\x2D": "\x2C", "\x2E": "\x2D", "\x2F": "\x2E",
  "\x30": "\x2F", "\x31": "\x30", "\x32": "\x31", "\x33": "\x32",
  "\x34": "\x33", "\x35": "\x34", "\x36": "\x35", "\x37": "\x36",
  "\x38": "\x37", "\x39": "\x38", "\x3A": "\x39", "\x3B": "\x3A",
  "\x3C": "\x3B", "\x3D": "\x3C", "\x3E": "\x3D", "\x3F": "\x3E",
  "\x40": "\x3F", "\x41": "\x40", "\x42": "\x41", "\x43": "\x42",
  "\x44": "\x43", "\x45": "\x44", "\x46": "\x45", "\x47": "\x46",
  "\x48": "\x47", "\x49": "\x48", "\x4A": "\x49", "\x4B": "\x4A",
  "\x4C": "\x4B", "\x4D": "\x4C", "\x4E": "\x4D", "\x4F": "\x4E",
  "\x50": "\x4F", "\x51": "\x50", "\x52": "\x51", "\x53": "\x52",
  "\x54": "\x53", "\x55": "\x54", "\x56": "\x55", "\x57": "\x56",
  "\x58": "\x57", "\x59": "\x58", "\x5A": "\x59", "\x5B": "\x5A",
  "\x5C": "\x5B", "\x5D": "\x5C", "\x5E": "\x5D", "\x5F": "\x5E",
  "\x60": "\x5F", "\x61": "\x60", "\x62": "\x61", "\x63": "\x62",
  "\x64": "\x63", "\x65": "\x64", "\x66": "\x65", "\x67": "\x66",
  "\x68": "\x67", "\x69": "\x68", "\x6A": "\x69", "\x6B": "\x6A",
  "\x6C": "\x6B", "\x6D": "\x6C", "\x6E": "\x6D", "\x6F": "\x6E",
  "\x70": "\x6F", "\x71": "\x70", "\x72": "\x71", "\x73": "\x72",
  "\x74": "\x73", "\x75": "\x74", "\x76": "\x75", "\x77": "\x76",
  "\x78": "\x77", "\x79": "\x78", "\x7A": "\x79", "\x7B": "\x7A",
  "\x7C": "\x7B", "\x7D": "\x7C", "\x7E": "\x7D", "\x7F": "\x7E",
  "\x80": "\x7F", "\x81": "\x80", "\x82": "\x81", "\x83": "\x82",
  "\x84": "\x83", "\x85": "\x84", "\x86": "\x85", "\x87": "\x86",
  "\x88": "\x87", "\x89": "\x88", "\x8A": "\x89", "\x8B": "\x8A",
  "\x8C": "\x8B", "\x8D": "\x8C", "\x8E": "\x8D", "\x8F": "\x8E",
  "\x90": "\x8F", "\x91": "\x90", "\x92": "\x91", "\x93": "\x92",
  "\x94": "\x93", "\x95": "\x94", "\x96": "\x95", "\x97": "\x96",
  "\x98": "\x97", "\x99": "\x98", "\x9A": "\x99", "\x9B": "\x9A",
  "\x9C": "\x9B", "\x9D": "\x9C", "\x9E": "\x9D", "\x9F": "\x9E",
  "\xA0": "\x9F", "\xA1": "\xA0", "\xA2": "\xA1", "\xA3": "\xA2",
  "\xA4": "\xA3", "\xA5": "\xA4", "\xA6": "\xA5", "\xA7": "\xA6",
  "\xA8": "\xA7", "\xA9": "\xA8", "\xAA": "\xA9", "\xAB": "\xAA",
  "\xAC": "\xAB", "\xAD": "\xAC", "\xAE": "\xAD", "\xAF": "\xAE",
  "\xB0": "\xAF", "\xB1": "\xB0", "\xB2": "\xB1", "\xB3": "\xB2",
  "\xB4": "\xB3", "\xB5": "\xB4", "\xB6": "\xB5", "\xB7": "\xB6",
  "\xB8": "\xB7", "\xB9": "\xB8", "\xBA": "\xB9", "\xBB": "\xBA",
  "\xBC": "\xBB", "\xBD": "\xBC", "\xBE": "\xBD", "\xBF": "\xBE",
  "\xC0": "\xBF", "\xC1": "\xC0", "\xC2": "\xC1", "\xC3": "\xC2",
  "\xC4": "\xC3", "\xC5": "\xC4", "\xC6": "\xC5", "\xC7": "\xC6",
  "\xC8": "\xC7", "\xC9": "\xC8", "\xCA": "\xC9", "\xCB": "\xCA",
  "\xCC": "\xCB", "\xCD": "\xCC", "\xCE": "\xCD", "\xCF": "\xCE",
  "\xD0": "\xCF", "\xD1": "\xD0", "\xD2": "\xD1", "\xD3": "\xD2",
  "\xD4": "\xD3", "\xD5": "\xD4", "\xD6": "\xD5", "\xD7": "\xD6",
  "\xD8": "\xD7", "\xD9": "\xD8", "\xDA": "\xD9", "\xDB": "\xDA",
  "\xDC": "\xDB", "\xDD": "\xDC", "\xDE": "\xDD", "\xDF": "\xDE",
  "\xE0": "\xDF", "\xE1": "\xE0", "\xE2": "\xE1", "\xE3": "\xE2",
  "\xE4": "\xE3", "\xE5": "\xE4", "\xE6": "\xE5", "\xE7": "\xE6",
  "\xE8": "\xE7", "\xE9": "\xE8", "\xEA": "\xE9", "\xEB": "\xEA",
  "\xEC": "\xEB", "\xED": "\xEC", "\xEE": "\xED", "\xEF": "\xEE",
  "\xF0": "\xEF", "\xF1": "\xF0", "\xF2": "\xF1", "\xF3": "\xF2",
  "\xF4": "\xF3", "\xF5": "\xF4", "\xF6": "\xF5", "\xF7": "\xF6",
  "\xF8": "\xF7", "\xF9": "\xF8", "\xFA": "\xF9", "\xFB": "\xFA",
  "\xFC": "\xFB", "\xFD": "\xFC", "\xFE": "\xFD", "\xFF": "\xFE",
};

/**
 * `Incr<C>` computes the successor of a single-byte character `C`.
 * If `C` is not a single-byte character, it returns \x00.
 */
export type Incr<C> = C extends Char ? Incrs[C] : "\x00";

/**
 * `Decr<C>` computes the predecessor of a single-byte character `C`.
 * If `C` is not a single-byte character, it returns \x00.
 */
export type Decr<C> = C extends Char ? Decrs[C] : "\x00";
