import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  // Getting Started Collapse
  public gettingStarted = false;
  public addingCompany = true;
  public troubleshootingImport = true;
  public importingDivisionalData = true;
  public importingBudget = true;
  public companyProfile = true;
  public chartOfAccounts = true;
  public kpi = true;

  // Reporting Collapse
  public creatingReport = false;
  public editingReport = true;
  public scalingAutomating = true;
  public publishingReports = true;
  public faqReporting = true;

  // Forecasting Collapse
  public createForecast = false;
  public settingBaseline = true;
  public planningAndStrategising = true;
  public reportingForecast = true;
  public addAreas = true;
  public forecastingTax = true;
  public forecastingFaq = true;

  // Consolidation & Benchmarking Collapse
  public createConsolidated = false;
  public consolidatedGroup = true;
  public benchmarkGroup = true;
  public consolidatedAnalysis = true;
  public benchmarkGroupAnalysis = true;
  public consolidatedFaq = true;

  // Classes, Locations, & Tracking Categories Collapse
  public divisionalKpi = false;
  public divisionalBudgets = true;
  public groupingDivision = true;
  public consolidatedAnalysisReporting = true;
  public addKnowledgeFaq = true;

  // Analysis Tools Collapse
  public analysisTools = false;
  public troubleshooting = true;

  // User Management Collapse
  public userManagement = false;
  public subscriptionAndBilling = true;
  public security = true;
  public systemRequirements = true;

  // FAQ Collapse
  public faqTroubleshooting = false;
  public integration = true;
  public dataManagement = true;
  public financialStatement = true;
  public faqKpi = true;

  constructor() {}

  ngOnInit(): void {}
}
