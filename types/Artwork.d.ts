export interface ArticResponse {
  pagination: Pagination;
  data: Artwork[];
  info: Info;
  config: Config;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}

export interface Artwork {
  id: number;
  api_model: APIModel;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: null;
  thumbnail: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: number | null;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: DateQualifierTitle;
  date_qualifier_id: number | null;
  artist_display: string;
  place_of_origin: null | string;
  description: null | string;
  short_description: null | string;
  dimensions: string;
  dimensions_detail: DimensionsDetail[];
  medium_display: string;
  inscriptions: null | string;
  credit_line: string;
  catalogue_display: null | string;
  publication_history: null | string;
  exhibition_history: null | string;
  provenance_text: null | string;
  edition: null;
  publishing_verification_level: PublishingVerificationLevel;
  internal_department_id: number;
  fiscal_year: number | null;
  fiscal_year_deaccession: null;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: null | string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: Color;
  latitude: number | null;
  longitude: number | null;
  latlon: null | string;
  is_on_view: boolean;
  on_loan_display: null;
  gallery_title: null | string;
  gallery_id: number | null;
  nomisma_id: null;
  artwork_type_title: ArtworkTypeTitle;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: any[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: null | string;
  style_title: null | string;
  alt_style_ids: string[];
  style_ids: string[];
  style_titles: string[];
  classification_id: null | string;
  classification_title: null | string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: null | string;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: MaterialID | null;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id: null | string;
  alt_technique_ids: string[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id: string;
  alt_image_ids: string[];
  document_ids: string[];
  sound_ids: string[];
  video_ids: any[];
  text_ids: string[];
  section_ids: number[];
  section_titles: string[];
  site_ids: any[];
  suggest_autocomplete_all: SuggestAutocompleteAll[];
  source_updated_at: Date;
  updated_at: Date;
  timestamp: Date;
  suggest_autocomplete_boosted?: string;
}

export enum APIModel {
  Artworks = "artworks",
}

export enum ArtworkTypeTitle {
  Painting = "Painting",
  Print = "Print",
  Sculpture = "Sculpture",
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export enum DateQualifierTitle {
  C = "c.",
  Empty = "",
}

export interface DimensionsDetail {
  depth: number | null;
  width: number;
  height: number;
  diameter: null;
  clarification: null | string;
}

export enum MaterialID {
  Tm13578 = "TM-13578",
  Tm2451 = "TM-2451",
  Tm2982 = "TM-2982",
}

export enum PublishingVerificationLevel {
  WebBasic = "Web Basic",
  WebCataloged = "Web Cataloged",
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Contexts {
  groupings: Grouping[];
}

export enum Grouping {
  Accession = "accession",
  Title = "title",
}

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}
