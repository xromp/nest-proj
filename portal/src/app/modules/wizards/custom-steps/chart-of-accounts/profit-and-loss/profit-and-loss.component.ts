import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profit-and-loss',
  templateUrl: './profit-and-loss.component.html',
})
export class ProfitAndLossComponent implements OnInit {
  incomes: Income[];
  expenses: Expense[];
  otherExpenses: OtherExpense[];
  costOfSales: CostOfSale[];
  taxes: Tax[];
  incomeTypes: IncomeType[];
  expenseTypes: ExpenseType[];

  constructor(private formBuilder: FormBuilder) {
    this.incomes = [
      {
        id: 1,
        name: 'Product SKU 1',
        accountNumber: '401000',
      },
      {
        id: 2,
        name: 'Product SKU 2',
        accountNumber: '402000',
      },
      {
        id: 3,
        name: 'Product SKU 3',
        accountNumber: '403000',
      },
      {
        id: 4,
        name: 'Discounts',
        accountNumber: '404000',
      },
      {
        id: 5,
        name: 'Refunds',
        accountNumber: '405000',
      },
    ];

    this.costOfSales = [
      {
        id: 1,
        name: 'Direct Labor',
        accountNumber: '501000',
      },
      {
        id: 2,
        name: 'Professional Service Fees',
        accountNumber: '501001',
      },
      {
        id: 3,
        name: 'Professional Services Prod & Delivery',
        accountNumber: '501002',
      },
      {
        id: 4,
        name: 'Customer Support Services',
        accountNumber: '501003',
      },
      {
        id: 5,
        name: 'Account Management',
        accountNumber: '501004',
      },
      {
        id: 6,
        name: 'License Fees',
        accountNumber: '502000',
      },
      {
        id: 7,
        name: 'Database',
        accountNumber: '503000',
      },
      {
        id: 8,
        name: 'Third Party Services',
        accountNumber: '505000',
      },
      {
        id: 9,
        name: 'Hosting Fee',
        accountNumber: '505001',
      },
      {
        id: 10,
        name: 'Web Hosting Fees',
        accountNumber: '505002',
      },
      {
        id: 11,
        name: 'Customer Support Tools',
        accountNumber: '505003',
      },
      {
        id: 12,
        name: 'Equipment Rental',
        accountNumber: '506000',
      },
      {
        id: 13,
        name: 'Supplies and Materials',
        accountNumber: '507000',
      },
      {
        id: 14,
        name: 'Other COGS',
        accountNumber: '508000',
      },
      {
        id: 15,
        name: 'Overhead Allocation',
        accountNumber: '590000',
      },
      {
        id: 16,
        name: 'Uncategorized COGS',
        accountNumber: '599999',
      },
    ];

    this.expenses = [
      {
        id: 1,
        name: 'Sales & Marketing',
        accountNumber: '601000',
      },
      {
        id: 2,
        name: 'Paid Ads',
        accountNumber: '601001',
      },
      {
        id: 3,
        name: 'Branding & Promotional Items',
        accountNumber: '601002',
      },
      {
        id: 4,
        name: 'Conferences',
        accountNumber: '601003',
      },
      {
        id: 5,
        name: 'Sales Commission',
        accountNumber: '601004',
      },
      {
        id: 6,
        name: 'Sales & Marketing Tools',
        accountNumber: '601005',
      },
    ];

    this.otherExpenses = [
      {
        id: 1,
        name: 'Interest (Income) / Expense',
        accountNumber: '901000',
      },
      {
        id: 2,
        name: 'Depreciation Expense',
        accountNumber: '903000',
      },
      {
        id: 3,
        name: 'Amortization Expense',
        accountNumber: '904000',
      },
      {
        id: 4,
        name: 'Bad Debt Expense',
        accountNumber: '905000',
      },
    ];

    this.taxes = [
      {
        id: 1,
        name: 'Tax',      
        accountNumber: '902000'
      }
    ];

    this.incomeTypes = this.getIncomeType();
    this.expenseTypes = this.getExpenseType();
  }

  getIncomeType() {
    return [
      { id: 1, acronym: 'SOPI', name: 'Sales of Product Income' },
      { id: 2, acronym: 'DRG', name: 'Discount/Refunds Given' },
    ];
  }

  getExpenseType() {
    return [
      { id: 1, acronym: 'OCOS', name: 'Other Cost of Services - COS' },
      { id: 2, acronym: 'COL', name: 'Cost of Labor - COS' },
      { id: 3, acronym: 'OMS', name: 'Other Miscellaneous Service' },
      { id: 4, acronym: 'ER', name: 'Equipment Rental' },
      { id: 5, acronym: 'SM', name: 'Supplies & Materials' },
      { id: 6, acronym: 'AP', name: 'Advertising/Promotional' },
      { id: 7, acronym: 'PE', name: 'Payroll Expense' },
      { id: 8, acronym: 'OGA', name: 'Office/General Administrative Expense' },
      { id: 9, acronym: 'DS', name: 'Dues & Subscriptions' },
      { id: 10, acronym: 'LPE', name: 'Legal & Professional Fee' },
      { id: 11, acronym: 'TRA', name: 'Travel' },
      { id: 12, acronym: 'OBE', name: 'Other Business Expenses' },
      { id: 13, acronym: 'INS', name: 'Insurance' },
      { id: 14, acronym: 'BC', name: 'Bank Charges' },
      { id: 15, acronym: 'RLB', name: 'Rent Or Lease of Buildings' },
      { id: 16, acronym: 'TAX', name: 'Taxes' },
      { id: 17, acronym: 'DEP', name: 'Depreciation' },
      { id: 18, acronym: 'AMO', name: 'Amortization' },
    ];
  }

  ngOnInit(): void {}
}

interface Income {
  id: number;
  name: string;
  accountNumber: string;
}

interface CostOfSale {
  id: number;
  name: string;
  accountNumber: string;
}

interface Expense {
  id: number;
  name: string;
  accountNumber: string;
}

interface OtherExpense {
  id: number;
  name: string;
  accountNumber: string;
}

interface Tax {
  id: number;
  name: string;
  accountNumber: string;
}

interface IncomeType {
  id: number;
  acronym: string;
  name: string;
}

interface ExpenseType {
  id: number;
  acronym: string;
  name: string;
}
