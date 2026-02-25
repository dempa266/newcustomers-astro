import CoreParagraph, { CoreParagraphFragment } from "./CoreParagraph";
import LazyblockHeropage, {
  LazyblockHeropageFragment,
} from "./LazyblockHeropage";
import LazyblockPagelinks, {
  LazyblockPagelinksFragment,
} from "./LazyblockPagelinks";
import LazyblockBanner, { LazyblockBannerFragment } from "./LazyblockBanner";
import LazyblockSplitimage, {
  LazyblockSplitimageFragment,
} from "./LazyblockSplitimage";
import LazyblockProcess, { LazyblockProcessFragment } from "./LazyblockProcess";
import LazyblockTestimonials, {
  LazyblockTestimonialsFragment,
} from "./LazyblockTestimonials";
import LazyblockCtaimage, {
  LazyblockCtaimageFragment,
} from "./LazyblockCtaimage";
import LazyblockFaq, { LazyblockFaqFragment } from "./LazyblockFaq";
import LazyblockSplitcoworkers, {
  LazyblockSplitcoworkersFragment,
} from "./LazyblockSplitcoworkers";
import LazyblockCoworkers, {
  LazyblockCoworkersFragment,
} from "./LazyblockCoworkers";
import LazyblockLogos, { LazyblockLogosFragment } from "./LazyblockLogos";
import LazyblockCalculator, {
  LazyblockCalculatorFragment,
} from "./LazyblockCalculator";
import CorePageList, { CorePageListFragment } from "./CorePageList";
import CoreHeading, { CoreHeadingFragment } from "./CoreHeading";
import LazyblockMainfeatures, {
  LazyblockMainfeaturesFragment,
} from "./LazyblockMainfeatures";
import LazyblockFeatures, {
  LazyblockFeaturesFragment,
} from "./LazyblockFeatures";
import LazyblockContact, { LazyblockContactFragment } from "./LazyblockContact";

interface BlockComponentsMap {
  [key: string]: React.ComponentType<any>; // Replace `any` with a more specific type if needed
}

// Combine all block queries into one string
const combinedBlockQueries = [
  CoreHeadingFragment,
  CoreParagraphFragment,
  CorePageListFragment,
  LazyblockHeropageFragment,
  LazyblockPagelinksFragment,
  LazyblockBannerFragment,
  LazyblockSplitimageFragment,
  LazyblockProcessFragment,
  LazyblockTestimonialsFragment,
  LazyblockCtaimageFragment,
  LazyblockFaqFragment,
  LazyblockSplitcoworkersFragment,
  LazyblockCoworkersFragment,
  LazyblockLogosFragment,
  LazyblockCalculatorFragment,
  LazyblockMainfeaturesFragment,
  LazyblockFeaturesFragment,
  LazyblockContactFragment,
].join("\n");

export const blocks: BlockComponentsMap = {
  "core/heading": CoreHeading,
  "core/paragraph": CoreParagraph,
  "core/page-list": CorePageList,
  "lazyblock/heropage": LazyblockHeropage,
  "lazyblock/pagelinks": LazyblockPagelinks,
  "lazyblock/banner": LazyblockBanner,
  "lazyblock/splitimage": LazyblockSplitimage,
  "lazyblock/process": LazyblockProcess,
  "lazyblock/testimonials": LazyblockTestimonials,
  "lazyblock/ctaimage": LazyblockCtaimage,
  "lazyblock/faq": LazyblockFaq,
  "lazyblock/splitcoworkers": LazyblockSplitcoworkers,
  "lazyblock/coworkers": LazyblockCoworkers,
  "lazyblock/logos": LazyblockLogos,
  "lazyblock/calculator": LazyblockCalculator,
  "lazyblock/mainfeatures": LazyblockMainfeatures,
  "lazyblock/features": LazyblockFeatures,
  "lazyblock/contact": LazyblockContact,
};

export { combinedBlockQueries };
