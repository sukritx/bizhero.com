export interface FilenameRule {
  keyword: string;
  categorySlug: string;
}

export interface FolderMapping {
  brandName: string;
  folderPath: string;
  categorySlug: string;
  filenameRules?: FilenameRule[];
}

export const brandFolderMap: Record<string, string> = {
  "Petronas PDS": "PETRONAS",
  "Valvoline PDS": "Valvoline",
};

export const excludeFolders = new Set([
  "COA", "ISO Valvoline", "เปรียบเทียบแบรนด์"
]);

export const folderMappings: FolderMapping[] = [
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Urania Series", categorySlug: "engine-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/GEO-NGV", categorySlug: "engine-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Hydraulic", categorySlug: "hydraulic-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Gear", categorySlug: "gear-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Gear Fleet", categorySlug: "gear-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Grease", categorySlug: "grease" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Compressor", categorySlug: "compressor-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Hot Oil", categorySlug: "heat-transfer-oil" },
  {
    brandName: "PETRONAS", folderPath: "Petronas PDS/Brake & Coolant", categorySlug: "brake-fluid",
    filenameRules: [
      { keyword: "Brake", categorySlug: "brake-fluid" },
      { keyword: "Coolant", categorySlug: "coolant" },
    ],
  },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Akros", categorySlug: "agricultural-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/BIO Gas", categorySlug: "turbine-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Gas Steam Turbine", categorySlug: "turbine-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Circular Series", categorySlug: "industrial-circulation-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Slideway", categorySlug: "slideway-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/อื่นๆ", categorySlug: "transmission-fluid" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Engine", categorySlug: "engine-oil" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Hydraulic", categorySlug: "hydraulic-oil" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Gear Fleet", categorySlug: "gear-oil" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Gear Industrial", categorySlug: "gear-oil" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Grease", categorySlug: "grease" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Brake", categorySlug: "brake-fluid" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Coolant", categorySlug: "coolant" },
];

export const suffixPatterns = [
  /_PDS_TH_\d{8}/i,
  /_PDS_EN_\d{8}/i,
  /_TDS_TH_\d{8}/i,
  /_TDS_EN_\d{8}/i,
  /_\d{5,6}_PDS_\d{6}/i,
  /_PDS_TH/i,
  /_PDS_EN/i,
  /_TDS_TH/i,
  /_TDS_EN/i,
  /_\w{2,3}_\d{4,8}/i,
  /_Updated \w+ \d{4}/i,
  / \(SDS BI\)/i,
  /_SDS_\w+/i,
  /_Rev \d+/i,
  /_\d{8}_\d{6}/i,
];

export const brandPrefixes = ["PETRONAS", "Valvoline", "Cresco Asia"];
