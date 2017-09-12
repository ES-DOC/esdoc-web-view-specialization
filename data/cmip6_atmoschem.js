(function (APP) {

    // ECMAScript 5 Strict Mode
    "use strict";

    // Register with application.
    APP.registerTopic({"id": "cmip6.atmoschem", "label": "Atmoschem", "description": "Atmospheric chemistry realm", "contact": "Charlotte Pascoe, David Hassell", "project": "cmip6", "shortTables": [], "subTopics": [{"id": "cmip6.atmoschem.key_properties", "label": "Key Properties", "description": "Key properties of the atmospheric chemistry", "properties": [{"id": "cmip6.atmoschem.key_properties.chemistry_scheme_scope", "label": "Chemistry Scheme Scope", "description": "Atmospheric domains covered by the atmospheric chemistry model", "cardinality": "1.N", "type": "enum", "enum": {"id": "Atmospheric domains covered by the atmospheric chemistry model", "label": "Chemistry Scheme Scopes", "description": "Atmospheric domains covered by the atmospheric chemistry model", "is_open": true, "choices": [{"description": null, "value": "troposhere"}, {"description": null, "value": "stratosphere"}, {"description": null, "value": "mesosphere"}, {"description": null, "value": "mesosphere"}, {"description": null, "value": "whole atmosphere"}]}}, {"id": "cmip6.atmoschem.key_properties.basic_approximations", "label": "Basic Approximations", "description": "Basic approximations made in the atmospheric chemistry model", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.prognostic_variables_form", "label": "Prognostic Variables Form", "description": "Form of prognostic variables in the atmospheric chemistry component.", "cardinality": "1.N", "type": "enum", "enum": {"id": "Form of prognostic variables in the atmospheric chemistry component.", "label": "Prognostic Vars Types", "description": "Form of prognostic variables in the atmospheric chemistry component.", "is_open": true, "choices": [{"description": null, "value": "3D mass/mixing ratio for gas"}]}}, {"id": "cmip6.atmoschem.key_properties.number_of_tracers", "label": "Number Of Tracers", "description": "Number of tracers in the atmospheric chemistry model", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.family_approach", "label": "Family Approach", "description": "atmospheric chemistry calculations generalized into families of species?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.key_properties.coupling_with_chemical_reactivity", "label": "Coupling With Chemical Reactivity", "description": "Atmospheric chemistry transport scheme turbulence is couple with chemical reactivity?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.method", "label": "Timestep Framework > Method", "description": "Mathematical method deployed to solve teh evolution of a given variable", "cardinality": "1.1", "type": "enum", "enum": {"id": "Mathematical method deployed to solve teh evolution of a given variable", "label": "Timestepping Methods", "description": "Mathematical method deployed to solve teh evolution of a given variable", "is_open": true, "choices": [{"description": null, "value": "Operator splitting"}, {"description": null, "value": "Integrated"}]}}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_advection_timestep", "label": "Timestep Framework > Split Operator Advection Timestep", "description": "Timestep for chemical species advection (in seconds)", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_physical_timestep", "label": "Timestep Framework > Split Operator Physical Timestep", "description": "Timestep for physics and chemistry (in seconds).", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_alternate_order", "label": "Timestep Framework > Split Operator Alternate Order", "description": "TO DO", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.integrated_timestep", "label": "Timestep Framework > Integrated Timestep", "description": "Timestep for the atmospheric chemistry model (in seconds)", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.integrated_scheme_type", "label": "Timestep Framework > Integrated Scheme Type", "description": "Specify the type of timestep scheme", "cardinality": "1.1", "type": "enum", "enum": {"id": "Specify the type of timestep scheme", "label": "Integrated Scheme Types", "description": "Specify the type of timestep scheme", "is_open": true, "choices": [{"description": null, "value": "Explicit"}, {"description": null, "value": "Implicit"}, {"description": null, "value": "Semi-implicit"}, {"description": null, "value": "Semi-analytic"}, {"description": null, "value": "Impact solver"}, {"description": null, "value": "Back Euler"}, {"description": null, "value": "Newton Raphson"}, {"description": null, "value": "Rosenbrock"}]}}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.turbulence", "label": "Timestep Framework > Split Operator Order > Turbulence", "description": "Call order for  scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.convection", "label": "Timestep Framework > Split Operator Order > Convection", "description": "Call order for convection scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.precipitation", "label": "Timestep Framework > Split Operator Order > Precipitation", "description": "Call order for precipitation scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.emissions", "label": "Timestep Framework > Split Operator Order > Emissions", "description": "Call order for emissions scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.deposition", "label": "Timestep Framework > Split Operator Order > Deposition", "description": "Call order for deposition scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.gas_phase_chemistry", "label": "Timestep Framework > Split Operator Order > Gas Phase Chemistry", "description": "Call order for gas phase chemistry scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.heterogeneous_phase_chemistry", "label": "Timestep Framework > Split Operator Order > Heterogeneous Phase Chemistry", "description": "Call order for heterogeneous phase chemistry scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.photo_chemistry", "label": "Timestep Framework > Split Operator Order > Photo Chemistry", "description": "Call order for photo chemistry scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.aerosols", "label": "Timestep Framework > Split Operator Order > Aerosols", "description": "Call order for aerosols scheme", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.meteorological_forcings.variables_3D", "label": "Meteorological Forcings > Variables 3D", "description": "Three dimensionsal forcing variables, e.g. U, V, W, T, Q, P, conventive mass flux", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.meteorological_forcings.variables_2D", "label": "Meteorological Forcings > Variables 2D", "description": "Two dimensionsal forcing variables, e.g. land-sea mask definition", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.meteorological_forcings.frequency", "label": "Meteorological Forcings > Frequency", "description": "Frequency with which meteological forcings are applied (in seconds).", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.resolution.name", "label": "Resolution > Name", "description": "This is a string usually used by the modelling group to describe the resolution of this grid, e.g. ORCA025, N512L180, T512L70 etc.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.resolution.canonical_horizontal_resolution", "label": "Resolution > Canonical Horizontal Resolution", "description": "Expression quoted for gross comparisons of resolution, eg. 50km or 0.1 degrees etc.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.resolution.number_of_horizontal_gridpoints", "label": "Resolution > Number Of Horizontal Gridpoints", "description": "Total number of horizontal (XY) points (or degrees of freedom) on computational grid.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.resolution.number_of_vertical_levels", "label": "Resolution > Number Of Vertical Levels", "description": "Number of vertical levels resolved on computational grid.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.resolution.is_adaptive_grid", "label": "Resolution > Is Adaptive Grid", "description": "Default is False. Set true if grid resolution changes during execution.", "cardinality": "0.1", "type": "bool"}, {"id": "cmip6.atmoschem.key_properties.tuning_applied.description", "label": "Tuning Applied > Description", "description": "General overview description of tuning: explain and motivate the main targets and metrics retained. &Document the relative weight given to climate performance metrics versus process oriented metrics, &and on the possible conflicts with parameterization level tuning. In particular describe any struggle &with a parameter value that required pushing it to its limits to solve a particular model deficiency.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.tuning_applied.global_mean_metrics_used", "label": "Tuning Applied > Global Mean Metrics Used", "description": "List set of metrics of the global mean state used in tuning model/component", "cardinality": "0.N", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.tuning_applied.regional_metrics_used", "label": "Tuning Applied > Regional Metrics Used", "description": "List of regional metrics of mean state used in tuning model/component", "cardinality": "0.N", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.tuning_applied.trend_metrics_used", "label": "Tuning Applied > Trend Metrics Used", "description": "List observed trend metrics used in tuning model/component", "cardinality": "0.N", "type": "str"}]}, {"id": "cmip6.atmoschem.grid", "label": "Grid", "description": "Atmospheric chemistry grid", "properties": []}, {"id": "cmip6.atmoschem.transport", "label": "Transport", "description": "Atmospheric chemistry transport", "properties": [{"id": "cmip6.atmoschem.transport.scheme", "label": "Scheme", "description": "Type of atmospheric chemistry transport scheme", "cardinality": "1.1", "type": "enum", "enum": {"id": "Type of atmospheric chemistry transport scheme", "label": "Transport Scheme Types", "description": "Type of atmospheric chemistry transport scheme", "is_open": false, "choices": [{"description": null, "value": "Eulerian"}, {"description": null, "value": "Semi-lagrangian"}, {"description": null, "value": "Eulerian and semi-lagrangian"}, {"description": null, "value": "Lagrangian"}]}}, {"id": "cmip6.atmoschem.transport.mass_conservation", "label": "Mass Conservation", "description": "Method used to ensure mass conservation", "cardinality": "1.N", "type": "enum", "enum": {"id": "Method used to ensure mass conservation", "label": "Mass Conservation Methods", "description": "Method used to ensure mass conservation", "is_open": true, "choices": [{"description": null, "value": "Mass adjustment"}, {"description": null, "value": "Concentrations positivity"}, {"description": null, "value": "Gradients monotonicity"}]}}, {"id": "cmip6.atmoschem.transport.convection", "label": "Convection", "description": "Transport by convection", "cardinality": "1.N", "type": "enum", "enum": {"id": "Transport by convection", "label": "Convection Types", "description": "Transport by convection", "is_open": true, "choices": [{"description": null, "value": "Convective fluxes connected to tracers"}, {"description": null, "value": "Vertical velocities connected to tracers"}]}}, {"id": "cmip6.atmoschem.transport.turbulence.dimensions", "label": "Turbulence > Dimensions", "description": "Dimension of the turbulence scheme in chemistry transport", "cardinality": "1.1", "type": "enum", "enum": {"id": "TDimension of the turbulence scheme in chemistry transport", "label": "Turbulence Dimensions", "description": "TDimension of the turbulence scheme in chemistry transport", "is_open": true, "choices": [{"description": "Two-dimensional", "value": "2D"}, {"description": "Three-dimensional", "value": "3D"}]}}, {"id": "cmip6.atmoschem.transport.turbulence.coupling_with_chemical_reactivity", "label": "Turbulence > Coupling With Chemical Reactivity", "description": "Is the chemistry transport scheme turbulence coupled with chemical reactivity?", "cardinality": "1.1", "type": "bool"}]}, {"id": "cmip6.atmoschem.emissions_concentrations", "label": "Emissions Concentrations", "description": "Atmospheric chemistry transport", "properties": [{"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.method", "label": "Surface Emissions > Method", "description": "Method used to define chemical species emitted at the surface (several methods allowed because the different species may not use the same method).", "cardinality": "0.N", "type": "enum", "enum": {"id": "Method used to define chemical species emitted (several methods allowed because the different species may not use the same method).", "label": "Emissions Methods", "description": "Method used to define chemical species emitted (several methods allowed because the different species may not use the same method).", "is_open": true, "choices": [{"description": null, "value": "Prescribed (climatology)"}, {"description": null, "value": "Prescribe (spatially uniform)"}, {"description": null, "value": "Interactive"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.sources", "label": "Surface Emissions > Sources", "description": "Sources of the chemical species emitted at the surface that are taken into account in the emissions scheme", "cardinality": "0.N", "type": "enum", "enum": {"id": "Sources of the chemical species emitted at the surface that are taken into account in the emissions scheme", "label": "Surface Source Types", "description": "Sources of the chemical species emitted at the surface that are taken into account in the emissions scheme", "is_open": true, "choices": [{"description": null, "value": "Vegetation"}, {"description": null, "value": "Bare ground"}, {"description": null, "value": "Sea surface"}, {"description": null, "value": "Anthropogenic"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.prescribed_climatology", "label": "Surface Emissions > Prescribed Climatology", "description": "Specify the climatology type for chemical emissions prescribed at the surface", "cardinality": "0.1", "type": "enum", "enum": {"id": "Specify the climatology type for chemical emissions", "label": "Prescribed Climatology Type", "description": "Specify the climatology type for chemical emissions", "is_open": false, "choices": [{"description": null, "value": "Constant"}, {"description": null, "value": "Interannual"}, {"description": null, "value": "Annual"}, {"description": null, "value": "Monthly"}, {"description": null, "value": "Daily"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.prescribed_climatology_emitted_species", "label": "Surface Emissions > Prescribed Climatology Emitted Species", "description": "List of chemical species emitted at the surface and prescribed via a climatology", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.prescribed_spatially_uniform_emitted_species", "label": "Surface Emissions > Prescribed Spatially Uniform Emitted Species", "description": "List of chemical species emitted at the surface and prescribed as spatially uniform", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.interactive_emitted_species", "label": "Surface Emissions > Interactive Emitted Species", "description": "List of chemical species emitted at the surface and specified via an interactive method", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.other_emitted_species", "label": "Surface Emissions > Other Emitted Species", "description": "List of chemical species emitted at the surface and specified via an \"other method\"", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.other_method_characteristics", "label": "Surface Emissions > Other Method Characteristics", "description": "Characteristics of the \"other method\" used for chemical emissions at the surface", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.method", "label": "Atmospheric Emissions > Method", "description": "Method used to define the chemical species emitted in the atmosphere (several methods allowed because the different species may not use the same method).", "cardinality": "0.N", "type": "enum", "enum": {"id": "Method used to define chemical species emitted (several methods allowed because the different species may not use the same method).", "label": "Emissions Methods", "description": "Method used to define chemical species emitted (several methods allowed because the different species may not use the same method).", "is_open": true, "choices": [{"description": null, "value": "Prescribed (climatology)"}, {"description": null, "value": "Prescribe (spatially uniform)"}, {"description": null, "value": "Interactive"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.sources", "label": "Atmospheric Emissions > Sources", "description": "Sources of chemical species emitted in the atmosphere that are taken into account in the emissions scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Sources of the chemical species emitted in the atmosphere that are taken into account in the emissions scheme", "label": "Atmospheric Source Types", "description": "Sources of the chemical species emitted in the atmosphere that are taken into account in the emissions scheme", "is_open": true, "choices": [{"description": null, "value": "Aircraft"}, {"description": null, "value": "Biomass burning"}, {"description": null, "value": "Lightning"}, {"description": null, "value": "Volcanos"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.prescribed_climatology", "label": "Atmospheric Emissions > Prescribed Climatology", "description": "Specify the climatology type for chemical emissions prescribed in the atmosphere.", "cardinality": "0.1", "type": "enum", "enum": {"id": "Specify the climatology type for chemical emissions", "label": "Prescribed Climatology Type", "description": "Specify the climatology type for chemical emissions", "is_open": false, "choices": [{"description": null, "value": "Constant"}, {"description": null, "value": "Interannual"}, {"description": null, "value": "Annual"}, {"description": null, "value": "Monthly"}, {"description": null, "value": "Daily"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.prescribed_climatology_emitted_species", "label": "Atmospheric Emissions > Prescribed Climatology Emitted Species", "description": "List of chemical species emitted in the atmosphere and prescribed via a climatology", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.prescribed_spatially_uniform_emitted_species", "label": "Atmospheric Emissions > Prescribed Spatially Uniform Emitted Species", "description": "List of chemical species emitted in the atmosphere and prescribed as spatially uniform", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.interactive_emitted_species", "label": "Atmospheric Emissions > Interactive Emitted Species", "description": "List of chemical species emitted in the atmosphere and specified via an interactive method", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.other_emitted_species", "label": "Atmospheric Emissions > Other Emitted Species", "description": "List of chemical species emitted in the atmosphere and specified via an \"other method\"", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.other_method_characteristics", "label": "Atmospheric Emissions > Other Method Characteristics", "description": "Characteristics of the \"other method\" used for chemical emissions in the atmosphere", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.concentrations.prescribed_lower_boundary", "label": "Concentrations > Prescribed Lower Boundary", "description": "List of species prescribed at the lower boundary.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.concentrations.prescribed_upper_boundary", "label": "Concentrations > Prescribed Upper Boundary", "description": "List of species prescribed at the upper boundary.", "cardinality": "0.1", "type": "str"}]}, {"id": "cmip6.atmoschem.gas_phase_chemistry", "label": "Gas Phase Chemistry", "description": "Atmospheric chemistry transport", "properties": [{"id": "cmip6.atmoschem.gas_phase_chemistry.species", "label": "Species", "description": "Species included in the gas phase chemistry scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Species included in the gas phase chemistry scheme.", "label": "Species Types", "description": "Species included in the gas phase chemistry scheme.", "is_open": true, "choices": [{"description": null, "value": "HOx"}, {"description": null, "value": "NOy"}, {"description": null, "value": "Ox"}, {"description": null, "value": "Cly"}, {"description": null, "value": "HSOx"}, {"description": null, "value": "Bry"}, {"description": null, "value": "VOCs"}, {"description": null, "value": "isoprene"}, {"description": null, "value": "H2O"}]}}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_bimolecular_reactions", "label": "Number Of Bimolecular Reactions", "description": "The number of bi-molecular reactions in the gas phase chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_termolecular_reactions", "label": "Number Of Termolecular Reactions", "description": "The number of ter-molecular reactions in the gas phase chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_advected_species", "label": "Number Of Advected Species", "description": "The number of advected species in the gas phase chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_steady_state_species", "label": "Number Of Steady State Species", "description": "The number of steady state species in the gas phase chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.dry_deposition.interactive", "label": "Dry Deposition > Interactive", "description": "Is dry deposition interactive (as opposed to prescribed)?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.wet_deposition.included", "label": "Wet Deposition > Included", "description": "Is wet deposition included?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.oxidation.included", "label": "Oxidation > Included", "description": "Is wet oxidation included?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.washout_rainout.methods", "label": "Washout Rainout > Methods", "description": "Methods of downward transport of soluble chemistry species in clouds.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Methods of downward transport of soluble chemistry species in clouds.", "label": "Washout Methods", "description": "Methods of downward transport of soluble chemistry species in clouds.", "is_open": false, "choices": [{"description": null, "value": "In-cloud scavenging"}, {"description": null, "value": "Below-cloud scavenging"}]}}]}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry", "label": "Stratospheric Heterogeneous Chemistry", "description": "Atmospheric chemistry startospheric heterogeneous chemistry", "properties": [{"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.gas_phase_species", "label": "Gas Phase Species", "description": "Gas phase species included in the stratospheric heterogeneous chemistry scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Gas phase species included in the stratospheric heterogeneous chemistry scheme", "label": "Gas Phase Species", "description": "Gas phase species included in the stratospheric heterogeneous chemistry scheme", "is_open": false, "choices": [{"description": null, "value": "Cly"}, {"description": null, "value": "Bry"}, {"description": null, "value": "NOy"}]}}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.aerosol_species", "label": "Aerosol Species", "description": "Aerosol species included in the stratospheric heterogeneous chemistry scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Aerosol species included in the stratospheric heterogeneous chemistry scheme", "label": "Aerosol Species", "description": "Aerosol species included in the stratospheric heterogeneous chemistry scheme", "is_open": false, "choices": [{"description": null, "value": "Sulphate"}, {"description": null, "value": "Polar stratospheric ice"}, {"description": null, "value": "NAT (Nitric acid trihydrate)"}, {"description": null, "value": "NAD (Nitric acid dihydrate)"}, {"description": null, "value": "STS (supercooled ternary solution aerosol particule))"}]}}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.number_of_reactions", "label": "Number Of Reactions", "description": "The number of reactions in the stratospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.number_of_advected_species", "label": "Number Of Advected Species", "description": "The number of advected species in the stratospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.number_of_steady_state_species", "label": "Number Of Steady State Species", "description": "The number of steady state species in the stratospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.sedimentation.included", "label": "Sedimentation > Included", "description": "Is sedimentation is included in the stratospheric heterogeneous chemistry scheme or not?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.coagulation.included", "label": "Coagulation > Included", "description": "Is coagulation is included in the stratospheric heterogeneous chemistry scheme or not?", "cardinality": "1.1", "type": "bool"}]}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry", "label": "Tropospheric Heterogeneous Chemistry", "description": "Atmospheric chemistry startospheric heterogeneous chemistry", "properties": [{"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.gas_phase_species", "label": "Gas Phase Species", "description": "List of gas phase species included in the tropospheric heterogeneous chemistry scheme.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.aerosol_species", "label": "Aerosol Species", "description": "Aerosol species included in the tropospheric heterogeneous chemistry scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Aerosol species included in the stratospheric heterogeneous chemistry scheme", "label": "Aerosol Species", "description": "Aerosol species included in the stratospheric heterogeneous chemistry scheme", "is_open": false, "choices": [{"description": null, "value": "Sulphate"}, {"description": null, "value": "Nitrate"}, {"description": null, "value": "Sea salt"}, {"description": null, "value": "Dust"}, {"description": null, "value": "Ice"}, {"description": null, "value": "Organic"}, {"description": null, "value": "Black carbon/soot"}, {"description": null, "value": "Polar stratospheric ice"}, {"description": null, "value": "Secondary organic aerosols"}, {"description": null, "value": "Particulate organic matter"}]}}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.number_of_reactions", "label": "Number Of Reactions", "description": "The number of reactions in the tropospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.number_of_advected_species", "label": "Number Of Advected Species", "description": "The number of advected species in the tropospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.number_of_steady_state_species", "label": "Number Of Steady State Species", "description": "The number of steady state species in the tropospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.dry_deposition.interactive", "label": "Dry Deposition > Interactive", "description": "Is dry deposition interactive (as opposed to prescribed)?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.wet_deposition.included", "label": "Wet Deposition > Included", "description": "Is wet deposition is included or not?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.washout_rainout.methods", "label": "Washout Rainout > Methods", "description": "Methods of downward transport of soluble chemistry species in clouds.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Methods of downward transport of soluble chemistry species in clouds.", "label": "Washout Methods", "description": "Methods of downward transport of soluble chemistry species in clouds.", "is_open": false, "choices": [{"description": null, "value": "In-cloud scavenging"}, {"description": null, "value": "Below-cloud scavenging"}]}}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.coagulation.included", "label": "Coagulation > Included", "description": "Is coagulation is included in the tropospheric heterogeneous chemistry scheme or not?", "cardinality": "1.1", "type": "bool"}]}, {"id": "cmip6.atmoschem.photo_chemistry", "label": "Photo Chemistry", "description": "Atmospheric chemistry photo chemistry", "properties": [{"id": "cmip6.atmoschem.photo_chemistry.number_of_reactions", "label": "Number Of Reactions", "description": "The number of reactions in the photo-chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.photo_chemistry.number_of_species", "label": "Number Of Species", "description": "The number of species in the photo-chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.photo_chemistry.photolysis.method", "label": "Photolysis > Method", "description": "Photolysis scheme", "cardinality": "1.1", "type": "enum", "enum": {"id": "Photolysis scheme", "label": "Photolysis Methods", "description": "Photolysis scheme", "is_open": false, "choices": [{"description": null, "value": "Offline (clear sky)"}, {"description": null, "value": "Offline (with clouds)"}, {"description": null, "value": "Online"}]}}, {"id": "cmip6.atmoschem.photo_chemistry.photolysis.online_processes", "label": "Photolysis > Online Processes", "description": "Processes included in the photolysis scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Processes included in the photolysis scheme.", "label": "Online Processes", "description": "Processes included in the photolysis scheme.", "is_open": false, "choices": [{"description": null, "value": "Scattering"}, {"description": null, "value": "Radiative transfer"}, {"description": null, "value": "Spectral resolution"}, {"description": null, "value": "Impact of clouds"}]}}, {"id": "cmip6.atmoschem.photo_chemistry.photolysis.reaction_data", "label": "Photolysis > Reaction Data", "description": "Reaction information taken into account by the photolysis scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Reaction information taken into account by the photolysis scheme.", "label": "Reaction Data", "description": "Reaction information taken into account by the photolysis scheme.", "is_open": false, "choices": [{"description": null, "value": "Updated reaction absorptio cross sections"}, {"description": null, "value": "Updated reaction quantum yields"}]}}]}]});

}(this.APP));