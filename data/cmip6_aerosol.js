(function (APP) {

    // ECMAScript 5 Strict Mode
    "use strict";

    // Register with application.
    APP.registerTopic({"id": "cmip6.aerosol", "label": "Aerosol", "description": "Atmospheric aerosols", "contact": "David Hassell", "authors": ["David Hassell"], "contributors": ["CMIP5 version", "Yves Balkanski (LSCE)", "Michael Schulz (MET Norway)"], "project": "cmip6", "changeHistory": [{"note": "Initialised from CMIP5", "date": "2017-08-04", "version": "0.1.0", "author": "Charlotte Pascoe (NCAS), David Hassell (NCAS)"}, {"note": "Updated with input from Yves Balkanski (LSCE) and Michael Schulz (MET Norway)", "date": "2017-12-18", "version": "0.2.0", "author": "David Hassell (NCAS)"}, {"note": "Copied grid from atmoschem", "date": "2018-03-06", "version": "1.0.0", "author": "David Hassell (NCAS)"}], "shortTables": [{"id": "aerosol", "label": "Aerosol CMIP6 short table", "properties": [{"priority": 1, "id": "cmip6.aerosol.key_properties.name"}, {"priority": 1, "id": "cmip6.aerosol.key_properties.family_approach"}, {"priority": 1, "id": "cmip6.aerosol.transport.scheme"}, {"priority": 1, "id": "cmip6.aerosol.transport.convention"}, {"priority": 1, "id": "cmip6.aerosol.emissions_concentrations.emissions.method"}, {"priority": 1, "id": "cmip6.aerosol.emissions_concentrations.concentrations.prescribed_lower_boundary"}, {"priority": 1, "id": "cmip6.aerosol.emissions_concentrations.concentrations.prescribed_upper_boundary"}, {"priority": 1, "id": "cmip6.aerosol.model.processes"}, {"priority": 1, "id": "cmip6.aerosol.model.scheme_type"}, {"priority": 1, "id": "cmip6.aerosol.model.optical_radiative_properties.mixtures.external"}, {"priority": 1, "id": "cmip6.aerosol.model.optical_radiative_properties.mixtures.internal"}, {"priority": 1, "id": "cmip6.aerosol.model.optical_radiative_properties.impact_of_h2o.internal_mixture"}, {"priority": 1, "id": "cmip6.aerosol.model.optical_radiative_properties.impact_of_h2o.external_mixture"}, {"priority": 1, "id": "cmip6.aerosol.model.optical_radiative_properties.radiative_scheme.shortwave_bands"}, {"priority": 1, "id": "cmip6.aerosol.model.optical_radiative_properties.radiative_scheme.longwave_bands"}]}], "subTopics": [{"id": "cmip6.aerosol.key_properties", "label": "Key Properties", "description": "Key properties of the aerosol model", "contact": "David Hassell", "properties": [{"id": "cmip6.aerosol.key_properties.name", "label": "Name", "description": "Name of aerosol model code", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.overview", "label": "Overview", "description": "Overview of aerosol model.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.scheme_scope", "label": "Scheme Scope", "description": "Atmospheric domains covered by the aerosol model", "cardinality": "1.N", "type": "enum", "enum": {"id": "Atmospheric domains covered by the aerosol model", "label": "Scheme Scopes", "description": "Atmospheric domains covered by the aerosol model", "is_open": true, "choices": [{"description": null, "value": "troposphere"}, {"description": null, "value": "stratosphere"}, {"description": null, "value": "mesosphere"}, {"description": null, "value": "whole atmosphere"}]}}, {"id": "cmip6.aerosol.key_properties.basic_approximations", "label": "Basic Approximations", "description": "Basic approximations made in the aerosol model", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.prognostic_variables_form", "label": "Prognostic Variables Form", "description": "Prognostic variables in the aerosol model", "cardinality": "1.N", "type": "enum", "enum": {"id": "Form of prognostic variables in the aerosol model.", "label": "Prognostic Vars Types", "description": "Form of prognostic variables in the aerosol model.", "is_open": true, "choices": [{"description": null, "value": "3D mass/volume ratio for aerosols"}, {"description": null, "value": "3D number concenttration for aerosols"}]}}, {"id": "cmip6.aerosol.key_properties.number_of_tracers", "label": "Number Of Tracers", "description": "Number of tracers in the aerosol model", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.aerosol.key_properties.family_approach", "label": "Family Approach", "description": "Are aerosol calculations generalized into families of species?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.key_properties.software_properties.repository", "label": "Software Properties > Repository", "description": "Location of code for this component.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.software_properties.code_version", "label": "Software Properties > Code Version", "description": "Code version identifier.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.software_properties.code_languages", "label": "Software Properties > Code Languages", "description": "Code language(s).", "cardinality": "0.N", "type": "str"}, {"id": "cmip6.aerosol.key_properties.timestep_framework.overview", "label": "Timestep Framework > Overview", "description": "Overview of physical properties of seawater in ocean in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.timestep_framework.method", "label": "Timestep Framework > Method", "description": "Mathematical method deployed to solve the time evolution of the prognostic variables", "cardinality": "1.1", "type": "enum", "enum": {"id": "Mathematical method deployed to solve the time evolution of the prognostic variables.", "label": "Timestepping Methods", "description": "Mathematical method deployed to solve the time evolution of the prognostic variables.", "is_open": true, "choices": [{"description": null, "value": "Uses atmospheric chemistry time stepping"}, {"description": null, "value": "Specific timestepping (operator splitting)"}, {"description": null, "value": "Specific timestepping (integrated)"}]}}, {"id": "cmip6.aerosol.key_properties.timestep_framework.split_operator_advection_timestep", "label": "Timestep Framework > Split Operator Advection Timestep", "description": "Timestep for aerosol advection (in seconds)", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.aerosol.key_properties.timestep_framework.split_operator_physical_timestep", "label": "Timestep Framework > Split Operator Physical Timestep", "description": "Timestep for aerosol physics (in seconds).", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.aerosol.key_properties.timestep_framework.integrated_timestep", "label": "Timestep Framework > Integrated Timestep", "description": "Timestep for the aerosol model (in seconds)", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.aerosol.key_properties.timestep_framework.integrated_scheme_type", "label": "Timestep Framework > Integrated Scheme Type", "description": "Specify the type of timestep scheme", "cardinality": "1.1", "type": "enum", "enum": {"id": "Specify the type of timestep scheme", "label": "Integrated Scheme Types", "description": "Specify the type of timestep scheme", "is_open": true, "choices": [{"description": null, "value": "Explicit"}, {"description": null, "value": "Implicit"}, {"description": null, "value": "Semi-implicit"}, {"description": null, "value": "Semi-analytic"}, {"description": null, "value": "Impact solver"}, {"description": null, "value": "Back Euler"}, {"description": null, "value": "Newton Raphson"}, {"description": null, "value": "Rosenbrock"}]}}, {"id": "cmip6.aerosol.key_properties.meteorological_forcings.overview", "label": "Meteorological Forcings > Overview", "description": "Overview of  in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.meteorological_forcings.variables_3D", "label": "Meteorological Forcings > Variables 3D", "description": "Three dimensionsal forcing variables, e.g. U, V, W, T, Q, P, conventive mass flux", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.meteorological_forcings.variables_2D", "label": "Meteorological Forcings > Variables 2D", "description": "Two dimensionsal forcing variables, e.g. land-sea mask definition", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.meteorological_forcings.frequency", "label": "Meteorological Forcings > Frequency", "description": "Frequency with which meteological forcings are applied (in seconds).", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.aerosol.key_properties.resolution.overview", "label": "Resolution > Overview", "description": "Overview of resolution in the aersosol model grid in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.resolution.name", "label": "Resolution > Name", "description": "This is a string usually used by the modelling group to describe the resolution of this grid, e.g. ORCA025, N512L180, T512L70 etc.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.resolution.canonical_horizontal_resolution", "label": "Resolution > Canonical Horizontal Resolution", "description": "Expression quoted for gross comparisons of resolution, eg. 50km or 0.1 degrees etc.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.resolution.number_of_horizontal_gridpoints", "label": "Resolution > Number Of Horizontal Gridpoints", "description": "Total number of horizontal (XY) points (or degrees of freedom) on computational grid.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.aerosol.key_properties.resolution.number_of_vertical_levels", "label": "Resolution > Number Of Vertical Levels", "description": "Number of vertical levels resolved on computational grid.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.aerosol.key_properties.resolution.is_adaptive_grid", "label": "Resolution > Is Adaptive Grid", "description": "Default is False. Set true if grid resolution changes during execution.", "cardinality": "0.1", "type": "bool"}, {"id": "cmip6.aerosol.key_properties.tuning_applied.overview", "label": "Tuning Applied > Overview", "description": "Overview of tuning methodology for aerosol model in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.tuning_applied.description", "label": "Tuning Applied > Description", "description": "General overview description of tuning: explain and motivate the main targets and metrics retained. &Document the relative weight given to climate performance metrics versus process oriented metrics, &and on the possible conflicts with parameterization level tuning. In particular describe any struggle &with a parameter value that required pushing it to its limits to solve a particular model deficiency.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.key_properties.tuning_applied.global_mean_metrics_used", "label": "Tuning Applied > Global Mean Metrics Used", "description": "List set of metrics of the global mean state used in tuning model/component", "cardinality": "0.N", "type": "str"}, {"id": "cmip6.aerosol.key_properties.tuning_applied.regional_metrics_used", "label": "Tuning Applied > Regional Metrics Used", "description": "List of regional metrics of mean state used in tuning model/component", "cardinality": "0.N", "type": "str"}, {"id": "cmip6.aerosol.key_properties.tuning_applied.trend_metrics_used", "label": "Tuning Applied > Trend Metrics Used", "description": "List observed trend metrics used in tuning model/component", "cardinality": "0.N", "type": "str"}]}, {"id": "cmip6.aerosol.grid", "label": "Grid", "description": "Aerosol grid", "contact": "David Hassell", "properties": [{"id": "cmip6.aerosol.grid.name", "label": "Name", "description": "Name of grid in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.grid.overview", "label": "Overview", "description": "Overview of grid in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.grid.matches_atmosphere_grid", "label": "Matches Atmosphere Grid", "description": " Does the atmospheric aerosol grid match the atmosphere grid?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.grid.resolution.overview", "label": "Resolution > Overview", "description": "Overview of resolution in the atmospheric aerosol grid in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.grid.resolution.name", "label": "Resolution > Name", "description": "This is a string usually used by the modelling group to describe the resolution of this grid, e.g. ORCA025, N512L180, T512L70 etc.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.grid.resolution.canonical_horizontal_resolution", "label": "Resolution > Canonical Horizontal Resolution", "description": "Expression quoted for gross comparisons of resolution, eg. 50km or 0.1 degrees etc.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.grid.resolution.number_of_horizontal_gridpoints", "label": "Resolution > Number Of Horizontal Gridpoints", "description": "Total number of horizontal (XY) points (or degrees of freedom) on computational grid.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.aerosol.grid.resolution.number_of_vertical_levels", "label": "Resolution > Number Of Vertical Levels", "description": "Number of vertical levels resolved on computational grid.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.aerosol.grid.resolution.is_adaptive_grid", "label": "Resolution > Is Adaptive Grid", "description": "Default is False. Set true if grid resolution changes during execution.", "cardinality": "0.1", "type": "bool"}]}, {"id": "cmip6.aerosol.transport", "label": "Transport", "description": "Aerosol transport", "contact": "David Hassell", "properties": [{"id": "cmip6.aerosol.transport.name", "label": "Name", "description": "Commonly used name for the transport in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.transport.overview", "label": "Overview", "description": "Overview of aerosol transport in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.transport.scheme", "label": "Scheme", "description": "Method for aerosol transport modeling", "cardinality": "1.1", "type": "enum", "enum": {"id": "Method for aerosol transport modeling", "label": "Transport Schemes", "description": "Method for aerosol transport modeling", "is_open": false, "choices": [{"description": null, "value": "Uses Atmospheric chemistry transport scheme"}, {"description": null, "value": "Specific transport scheme (eulerian)"}, {"description": null, "value": "Specific transport scheme (semi-lagrangian)"}, {"description": null, "value": "Specific transport scheme (eulerian and semi-lagrangian)"}, {"description": null, "value": "Specific transport scheme (lagrangian)"}]}}, {"id": "cmip6.aerosol.transport.mass_conservation_scheme", "label": "Mass Conservation Scheme", "description": "Method used to ensure mass conservation.", "cardinality": "1.N", "type": "enum", "enum": {"id": "Method used to ensure mass conservation", "label": "Mass Conservation Methods", "description": "Method used to ensure mass conservation", "is_open": true, "choices": [{"description": null, "value": "Uses Atmospheric chemistry transport scheme"}, {"description": null, "value": "Mass adjustment"}, {"description": null, "value": "Concentrations positivity"}, {"description": null, "value": "Gradients monotonicity"}]}}, {"id": "cmip6.aerosol.transport.convention", "label": "Convention", "description": "Transport by convention", "cardinality": "1.N", "type": "enum", "enum": {"id": "Transport by convection", "label": "Convection Types", "description": "Transport by convection", "is_open": true, "choices": [{"description": null, "value": "Uses Atmospheric chemistry transport scheme"}, {"description": null, "value": "Convective fluxes connected to tracers"}, {"description": null, "value": "Vertical velocities connected to tracers"}]}}]}, {"id": "cmip6.aerosol.emissions", "label": "Emissions", "description": "Atmospheric aerosol emissions", "contact": "David Hassell", "properties": [{"id": "cmip6.aerosol.emissions.name", "label": "Name", "description": "Commonly used name for the emissions in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.emissions.overview", "label": "Overview", "description": "Overview of atmospheric aerosol emissions in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.emissions.method", "label": "Method", "description": "Method used to define aerosol species (several methods allowed because the different species may not use the same method).", "cardinality": "1.N", "type": "enum", "enum": {"id": "Method used to define aerosol species emitted (several methods allowed because the different species may not use the same method).", "label": "Emissions Methods", "description": "Method used to define aerosol species emitted (several methods allowed because the different species may not use the same method).", "is_open": true, "choices": [{"description": null, "value": "None"}, {"description": null, "value": "Prescribed (climatology)"}, {"description": null, "value": "Prescribed CMIP6"}, {"description": null, "value": "Prescribed above surface"}, {"description": null, "value": "Interactive"}, {"description": null, "value": "Interactive above surface"}]}}, {"id": "cmip6.aerosol.emissions.sources", "label": "Sources", "description": "Sources of the aerosol species are taken into account in the emissions scheme", "cardinality": "0.N", "type": "enum", "enum": {"id": "Sources of the aerosol species emitted at the surface that are taken into account in the emissions scheme", "label": "Surface Source Types", "description": "Sources of the aerosol species emitted at the surface that are taken into account in the emissions scheme", "is_open": true, "choices": [{"description": null, "value": "Vegetation"}, {"description": null, "value": "Volcanos"}, {"description": null, "value": "Bare ground"}, {"description": null, "value": "Sea surface"}, {"description": null, "value": "Lightning"}, {"description": null, "value": "Fires"}, {"description": null, "value": "Aircraft"}, {"description": null, "value": "Anthropogenic"}]}}, {"id": "cmip6.aerosol.emissions.prescribed_climatology", "label": "Prescribed Climatology", "description": "Specify the climatology type for aerosol emissions", "cardinality": "0.1", "type": "enum", "enum": {"id": "Specify the climatology type for aerosol emissions", "label": "Prescribed Climatology Type", "description": "Specify the climatology type for aerosol emissions", "is_open": false, "choices": [{"description": null, "value": "Constant"}, {"description": null, "value": "Interannual"}, {"description": null, "value": "Annual"}, {"description": null, "value": "Monthly"}, {"description": null, "value": "Daily"}]}}, {"id": "cmip6.aerosol.emissions.prescribed_climatology_emitted_species", "label": "Prescribed Climatology Emitted Species", "description": "List of aerosol species emitted and prescribed via a climatology", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.emissions.prescribed_spatially_uniform_emitted_species", "label": "Prescribed Spatially Uniform Emitted Species", "description": "List of aerosol species emitted  and prescribed as spatially uniform", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.emissions.interactive_emitted_species", "label": "Interactive Emitted Species", "description": "List of aerosol species emitted and specified via an interactive method", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.emissions.other_emitted_species", "label": "Other Emitted Species", "description": "List of aerosol species emitted and specified via an \"other method\"", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.emissions.other_method_characteristics", "label": "Other Method Characteristics", "description": "Characteristics of the \"other method\" used for aerosol emissions", "cardinality": "0.1", "type": "str"}]}, {"id": "cmip6.aerosol.concentrations", "label": "Concentrations", "description": "Atmospheric aerosol concentrations", "contact": "David Hassell", "properties": [{"id": "cmip6.aerosol.concentrations.name", "label": "Name", "description": "Commonly used name for the concentrations in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.concentrations.overview", "label": "Overview", "description": "Overview of atmospheric aerosol concentrations in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.concentrations.prescribed_lower_boundary", "label": "Prescribed Lower Boundary", "description": "List of species prescribed at the lower boundary.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.concentrations.prescribed_upper_boundary", "label": "Prescribed Upper Boundary", "description": "List of species prescribed at the upper boundary.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.concentrations.prescribed_fields_mmr", "label": "Prescribed Fields Mmr", "description": "List of species prescribed as mass mixing ratios.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.concentrations.prescribed_fields_aod_plus_ccn", "label": "Prescribed Fields Aod Plus Ccn", "description": "List of species prescribed as AOD plus CCNs.", "cardinality": "0.1", "type": "str"}]}, {"id": "cmip6.aerosol.optical_radiative_properties", "label": "Optical Radiative Properties", "description": "Aerosol optical and radiative properties", "contact": "David Hassell", "properties": [{"id": "cmip6.aerosol.optical_radiative_properties.name", "label": "Name", "description": "Commonly used name for the optical radiative properties in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.overview", "label": "Overview", "description": "Overview of aerosol optical and radiative properties in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.absorption.overview", "label": "Absorption > Overview", "description": "Overview of absortion properties in aerosol scheme in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.absorption.black_carbon", "label": "Absorption > Black Carbon", "description": "Absorption mass coefficient of black carbon at 550nm (if non-absorbing enter 0)", "cardinality": "0.1", "type": "float"}, {"id": "cmip6.aerosol.optical_radiative_properties.absorption.dust", "label": "Absorption > Dust", "description": "Absorption mass coefficient of dust at 550nm (if non-absorbing enter 0)", "cardinality": "0.1", "type": "float"}, {"id": "cmip6.aerosol.optical_radiative_properties.absorption.organics", "label": "Absorption > Organics", "description": "Absorption mass coefficient of organics at 550nm (if non-absorbing enter 0)", "cardinality": "0.1", "type": "float"}, {"id": "cmip6.aerosol.optical_radiative_properties.mixtures.overview", "label": "Mixtures > Overview", "description": "Overview of  in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.mixtures.external", "label": "Mixtures > External", "description": "Is there external mixing with respect to chemical composition?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.optical_radiative_properties.mixtures.internal", "label": "Mixtures > Internal", "description": "Is there internal mixing with respect to chemical composition?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.optical_radiative_properties.mixtures.mixing_rule", "label": "Mixtures > Mixing Rule", "description": "If there is internal mixing with respect to chemical composition then indicate the mixinrg rule", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.impact_of_h2o.overview", "label": "Impact Of H2o > Overview", "description": "Overview of  in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.impact_of_h2o.size", "label": "Impact Of H2o > Size", "description": "Does H2O impact size?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.optical_radiative_properties.impact_of_h2o.internal_mixture", "label": "Impact Of H2o > Internal Mixture", "description": "Does H2O impact aerosol internal mixture?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.optical_radiative_properties.impact_of_h2o.external_mixture", "label": "Impact Of H2o > External Mixture", "description": "Does H2O impact aerosol external mixture?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.optical_radiative_properties.radiative_scheme.overview", "label": "Radiative Scheme > Overview", "description": "Overview of radiative scheme for aerosol in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.radiative_scheme.overview", "label": "Radiative Scheme > Overview", "description": "Overview of radiative scheme", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.radiative_scheme.shortwave_bands", "label": "Radiative Scheme > Shortwave Bands", "description": "Number of shortwave bands", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.aerosol.optical_radiative_properties.radiative_scheme.longwave_bands", "label": "Radiative Scheme > Longwave Bands", "description": "Number of longwave bands", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.aerosol.optical_radiative_properties.cloud_interactions.overview", "label": "Cloud Interactions > Overview", "description": "Overview of aerosol-cloud interactions in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.cloud_interactions.overview", "label": "Cloud Interactions > Overview", "description": "Overview of aerosol-cloud interactions", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.optical_radiative_properties.cloud_interactions.twomey", "label": "Cloud Interactions > Twomey", "description": "Is the Twomey effect included?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.optical_radiative_properties.cloud_interactions.twomey_minimum_ccn", "label": "Cloud Interactions > Twomey Minimum Ccn", "description": "If the Twomey effect is included, then what is the minimum CCN number?", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.aerosol.optical_radiative_properties.cloud_interactions.drizzle", "label": "Cloud Interactions > Drizzle", "description": "Does the scheme affect drizzle?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.optical_radiative_properties.cloud_interactions.cloud_lifetime", "label": "Cloud Interactions > Cloud Lifetime", "description": "Does the scheme affect cloud lifetime?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.aerosol.optical_radiative_properties.cloud_interactions.longwave_bands", "label": "Cloud Interactions > Longwave Bands", "description": "Number of longwave bands", "cardinality": "1.1", "type": "int"}]}, {"id": "cmip6.aerosol.model", "label": "Model", "description": "Aerosol model", "contact": "David Hassell", "properties": [{"id": "cmip6.aerosol.model.name", "label": "Name", "description": "Commonly used name for the model in aerosol model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.aerosol.model.overview", "label": "Overview", "description": "Overview of atmosperic aerosol model", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.aerosol.model.processes", "label": "Processes", "description": "Processes included in the Aerosol model.", "cardinality": "1.N", "type": "enum", "enum": {"id": "Processes included in the Aerosol model.", "label": "Model Processes", "description": "Processes included in the Aerosol model.", "is_open": false, "choices": [{"description": null, "value": "Dry deposition"}, {"description": null, "value": "Sedimentation"}, {"description": null, "value": "Wet deposition (impaction scavenging)"}, {"description": null, "value": "Wet deposition (nucleation scavenging)"}, {"description": null, "value": "Coagulation"}, {"description": null, "value": "Oxidation (gas phase)"}, {"description": null, "value": "Oxidation (in cloud)"}, {"description": null, "value": "Condensation"}, {"description": null, "value": "Ageing"}, {"description": null, "value": "Advection (horizontal)"}, {"description": null, "value": "Advection (vertical)"}, {"description": null, "value": "Heterogeneous chemistry"}, {"description": null, "value": "Nucleation"}]}}, {"id": "cmip6.aerosol.model.coupling", "label": "Coupling", "description": "Other model components coupled to the Aerosol model", "cardinality": "0.N", "type": "enum", "enum": {"id": "Other model components coupled to the Aerosol model.", "label": "Coupling", "description": "Other model components coupled to the Aerosol model.", "is_open": true, "choices": [{"description": null, "value": "Radiation"}, {"description": null, "value": "Land surface"}, {"description": null, "value": "Heterogeneous chemistry"}, {"description": null, "value": "Clouds"}, {"description": null, "value": "Ocean"}, {"description": null, "value": "Cryosphere"}, {"description": null, "value": "Gas phase chemistry"}]}}, {"id": "cmip6.aerosol.model.gas_phase_precursors", "label": "Gas Phase Precursors", "description": "List of gas phase aerosol precursors.", "cardinality": "1.N", "type": "enum", "enum": {"id": "List of gas phase aerosol precursors.", "label": "Gas Phase Precursors", "description": "List of gas phase aerosol precursors.", "is_open": true, "choices": [{"description": null, "value": "DMS"}, {"description": null, "value": "SO2"}, {"description": null, "value": "Ammonia"}, {"description": null, "value": "Iodine"}, {"description": null, "value": "Terpene"}, {"description": null, "value": "Isoprene"}, {"description": null, "value": "VOC"}, {"description": null, "value": "NOx"}]}}, {"id": "cmip6.aerosol.model.scheme_type", "label": "Scheme Type", "description": "Type(s) of aerosol scheme used by the aerosols model (potentially multiple: some species may be covered by one type of aerosol scheme and other species covered by another type).", "cardinality": "1.N", "type": "enum", "enum": {"id": "Type(s) of aerosol scheme used by the aerosols model (potentially multiple: some species may be covered by one type of aerosol scheme and other species covered by another type).", "label": "Scheme Types", "description": "Type(s) of aerosol scheme used by the aerosols model (potentially multiple: some species may be covered by one type of aerosol scheme and other species covered by another type).", "is_open": true, "choices": [{"description": null, "value": "Bulk"}, {"description": null, "value": "Modal"}, {"description": null, "value": "Bin"}]}}, {"id": "cmip6.aerosol.model.bulk_scheme_species", "label": "Bulk Scheme Species", "description": "List of species covered by the bulk scheme.", "cardinality": "1.N", "type": "enum", "enum": {"id": "List of species.", "label": "Species", "description": "List of species.", "is_open": true, "choices": [{"description": null, "value": "Sulphate"}, {"description": null, "value": "Nitrate"}, {"description": null, "value": "Sea salt"}, {"description": null, "value": "Dust"}, {"description": null, "value": "Ice"}, {"description": null, "value": "Organic"}, {"description": null, "value": "Black carbon / soot"}, {"description": null, "value": "SOA (secondary organic aerosols)"}, {"description": null, "value": "POM (particulate organic matter)"}, {"description": null, "value": "Polar stratospheric ice"}, {"description": null, "value": "NAT (Nitric acid trihydrate)"}, {"description": null, "value": "NAD (Nitric acid dihydrate)"}, {"description": null, "value": "STS (supercooled ternary solution aerosol particule)"}]}}]}]});

}(this.APP));