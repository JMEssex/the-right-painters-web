import { GlobalRegistrator } from "@happy-dom/global-registrator";

// Preload happy-dom for DOM testing
GlobalRegistrator.register();

// Tell React that act() is supported in this environment
(globalThis as Record<string, unknown>)['IS_REACT_ACT_ENVIRONMENT'] = true;
